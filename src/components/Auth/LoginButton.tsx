'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';
import LoginModal from './LoginModal';
import Image from 'next/image';

const LoginButton = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isAuthenticated && user) {
    return (
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
          aria-expanded={isDropdownOpen}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
                width={32}
                height={32}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <span className="hidden md:inline text-gray-800">{user.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
            <div className="px-4 py-2 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              个人资料
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              设置
            </a>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              退出登录
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        登录
      </button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LoginButton; 