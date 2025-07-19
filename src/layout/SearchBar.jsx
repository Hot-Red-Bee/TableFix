
import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="w-full mb-6">
      <input
        type="text"
        placeholder="Search by restaurant name or city..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SearchBar;
