'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/mockData';
import LoginButton from './Auth/LoginButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NewsNow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            {categories.map((category) => (
              <Link 
                key={category} 
                href={`/category/${category.toLowerCase()}`}
                className="text-gray-800 hover:text-blue-600"
              >
                {category}
              </Link>
            ))}
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <LoginButton />
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Login Button */}
            <LoginButton />
            
            {/* Mobile Menu Button */}
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link 
                key={category} 
                href={`/category/${category.toLowerCase()}`}
                className="block text-gray-800 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link 
              href="/about" 
              className="block text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 