import React, { useState } from "react";
import Search from "./Search";

function Header({ updateSearch }) {

  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <Search updateSearch={updateSearch} />
    </header>
  );
}

export default Header;