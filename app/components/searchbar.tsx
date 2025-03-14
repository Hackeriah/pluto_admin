import { useState } from 'react';
import { CgSearch } from "react-icons/cg";
const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    
  };

  return (
    <div className="relative w-[25vw]">
    <CgSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
    
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-full focus:outline-none -z-1"
    />
  </div>
  
  );
};

export default SearchBar;
