import React from "react";
import Search from "./Search";

function Header({ updateSearch, updateSort }) {
  // const handleChange = (event) => {
  //   const searchTerm = event.target.value;
  //   handleSearch(searchTerm); // Pass the search term to the handleSearch function
  // };

  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <Search updateSearch={updateSearch} updateSort={updateSort} />
    </header>
  );
}

export default Header;