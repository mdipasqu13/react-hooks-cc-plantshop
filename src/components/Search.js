import React from "react";
//created Search function component that takes in 2 props: search and updateSearch. Returns JSX that includes a div 
//for the searchbar, labels it "Search Plants", and takes in text as input from the user. the onChange event handler
//triggers whenever the input changes and immediately calls the updateSearch function that was passed in as a prop to 
//update the page
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