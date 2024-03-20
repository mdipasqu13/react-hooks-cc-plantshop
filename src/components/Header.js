import React from "react";
//I left this alone. Contains the header banner at top of page along with the little plant emoji
function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
    </header>
  );
}

export default Header;