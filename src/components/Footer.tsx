import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Tribute to Ratan Tata. Created by Tapit.Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;