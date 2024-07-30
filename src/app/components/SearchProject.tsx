import React, { useState } from 'react';

interface SearchProjectProps {
  projects: any[];
  onSearch: (searchTerm: string) => void;
}

const SearchProject: React.FC<SearchProjectProps> = ({ projects, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md px-4 py-2 w-full bg-transparent"
      />
    </div>
  );
};

export default SearchProject;
