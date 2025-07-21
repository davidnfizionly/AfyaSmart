import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, onLogoClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            onClick={onLogoClick}
            className="text-2xl font-bold text-teal-500 dark:text-teal-400 cursor-pointer"
          >
            Afya<span className="text-gray-800 dark:text-white">Smart</span>
          </h1>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;