import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ProfilePhoto: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-32 h-32 rounded-full overflow-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl`}>
      <img src="/ratan-tata.png" alt="Ratan Tata" className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfilePhoto;