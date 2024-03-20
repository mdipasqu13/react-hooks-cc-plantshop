

import React from "react";

function Search({ search, updateSearch }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;