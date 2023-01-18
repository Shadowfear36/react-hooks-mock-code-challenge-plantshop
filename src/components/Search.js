import React, {useState} from "react";

function Search({searchInput, setSearchInput}) {

const handleSearchChange = (e) => {
  setSearchInput(e.target.value);
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
        value={searchInput}
      />
    </div>
  );
}

export default Search;
