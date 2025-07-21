import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-xs">
        <div className="flex items-center mb-1">
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Afya</span>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;