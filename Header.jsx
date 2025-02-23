// Create the header component

import React, { useState } from "react";
import AdvanceSearch from "./AdvanceSearch";

const Header = ({ onSearch, onToggleFavorites }) => {
  // State to manage the search text
  const [searchText, setSearchText] = useState("");

  // Event handler for handling changes in the search input

  const handleChange = (event) => {
    // Update the search text state
    setSearchText(event.target.value);
    // Invoke the onSearch callback with the updated search text
    onSearch(event.target.value);
  };

  return (
    <header className="flex items-center px-[30px] bg-gradient-to-r from-[#28a739] via-[#1E6F60] to-black">
      <nav className="flex justify-between w-full">
        {/* Logo or site title */}
        <div className="text-2xl font-bold pt-5 font-serif tracking-wide">Elite Estates</div>

        {/* Search input and AdvanceSearch component */}
        <div className="pt-5 pb-10">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
            className="border border-green-400 h-[35px] w-[400px] px-[10px] rounded-lg mb-[20px]"
          />
          {/* AdvanceSearch component */}
          <AdvanceSearch />
        </div>
        
        {/* Button to toggle displaying favorites */}
        <div className="flex flex-col space-y-15 pt-7">
          <button
            className="bg-[#28a739] text-white h-[40px] w-[150px] rounded-lg fixed top-[10px] right-[10px]
            hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            onClick={onToggleFavorites} // Trigger favorite toggle
          >
            Show Favorites
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; // Export component for use elsewhere
