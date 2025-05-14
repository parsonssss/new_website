'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { login, socialLogin, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      onClose();
    } catch (error) {
      setError('登录失败，请检查您的邮箱和密码');
      console.error('Login error:', error);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setError('');
    
    try {
      await socialLogin(provider);
      onClose();
    } catch (error) {
      setError(`${provider} 登录失败，请稍后重试`);
      console.error(`${provider} login error:`, error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <h2 className="text-2xl font-bold text-center mb-6">登录到 NewsNow</h2>

        {/* 错误信息 */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* 邮箱登录表单 */}
        <form onSubmit={handleEmailLogin} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              电子邮箱
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? '登录中...' : '登录'}
          </button>
        </form>

        {/* 分隔线 */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">或使用社交媒体登录</span>
          </div>
        </div>

        {/* 社交媒体登录按钮 */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSocialLogin('WeChat')}
            className="flex items-center justify-center py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.667 15.889a.7.7 0 0 1-.631.074c-.953-.377-1.802-.952-2.997-1.885-.127-.099-.515.029-.515.029l-1.923.765c-.142.056-.272-.056-.213-.183l.43-1.192s-.056-.114.05-.198c2.091-1.803 2.918-3.32 2.918-4.807 0-2.926-2.926-5.227-6.285-5.227C3.663 3.264.5 5.708.5 8.776c0 1.83 1.06 3.458 2.68 4.523a.32.32 0 0 1 .127.298c-.107.618-.4 1.887-.4 1.887s-.057.199.142.107c.77-.44 1.731-.781 2.501-1.164.2-.099.385-.127.535.71.556.256 1.26.383 2.006.383 2.997 0 5.433-1.83 5.433-4.494 0-.554-.107-1.086-.27-1.589.99.347 1.86.952 2.586 1.732a5.18 5.18 0 0 1 1.459 3.613c0 1.703-.98 3.24-2.53 4.282-.07.057-.127.64-.07.163l.505 1.22c.064.12-.064.234-.199.176l-1.922-.696s-.163-.056-.334.049c-.65.37-1.374.697-2.147.909a.705.705 0 0 1-.8-.198c-.664.107-1.356.17-2.068.17-4.182 0-7.566-2.664-7.566-5.951 0-3.288 3.39-5.951 7.566-5.951 4.062 0 7.368 2.499 7.566 5.638z"/>
              </svg>
            </span>
            微信登录
          </button>
          <button
            onClick={() => handleSocialLogin('QQ')}
            className="flex items-center justify-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.003 2c-5.518 0-9.997 3.809-9.997 8.505 0 2.225 1.004 4.27 2.636 5.709-.145 1.643-.716 3.066-1.354 3.943-.708.908-.769 1.832-.118 2.417.57.54 1.561.614 2.926-.725 1.047-.984 2.233-2.247 2.985-3.487.649.159 1.323.247 2.022.247 5.518 0 9.997-3.811 9.997-8.505S17.52 2 12.003 2Zm0 1.5c4.693 0 8.5 3.103 8.5 7.005s-3.807 7.005-8.5 7.005c-.7 0-1.38-.096-2.032-.252A.75.75 0 0 0 9.25 17.5c-.77 1.348-1.904 2.672-2.9 3.625-.785.749-1.414.807-1.747.531-.137-.112-.179-.29-.105-.446.581-1.021 1.104-2.468 1.252-4.027a.75.75 0 0 0-.28-.708C3.816 15.133 3 13.892 3 10.505 3 6.61 7.085 3.5 12.003 3.5Z"/>
              </svg>
            </span>
            QQ登录
          </button>
          <button
            onClick={() => handleSocialLogin('Telegram')}
            className="flex items-center justify-center py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </span>
            Telegram登录
          </button>
          <button
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
              </svg>
            </span>
            Google登录
          </button>
        </div>

        {/* 注册链接 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            还没有账号？
            <button
              onClick={() => console.log('Register clicked')}
              className="ml-1 text-blue-600 hover:underline focus:outline-none"
              disabled={isLoading}
            >
              立即注册
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 