import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const { theme } = useTheme();

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search years, events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full py-2 px-4 pr-10 rounded-full border ${
          theme === 'dark'
            ? 'bg-gray-700 border-gray-600 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
      <Search className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
      }`} size={20} />
    </div>
  );
};

export default SearchBar;