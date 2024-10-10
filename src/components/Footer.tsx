import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 1937 to 2024 Tribute to Ratan Tata. Created by Tapit.Club.   <br></br>
          For all the Ratan Naval Tata fans out there! <br></br>To Contribute in this website, please contact us at through <a href="mailto:sidsarvesh4321@gmail.com" className="text-blue-500 hover:text-blue-700">Mail</a> and View my youtube channel at <a href="https://www.youtube.com/@SidSarvesh" className="text-red-500 hover:text-red-700">YouTube</a></p>
      </div>
    </footer>
  );
};

export default Footer;