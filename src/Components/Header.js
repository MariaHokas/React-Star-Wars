import React from "react";

function Header() {
  return (
    <header className="container">
      <img
        className="header-image"
        src="https://frantic.s3-eu-west-1.amazonaws.com/star-wars-header.jpg"
        alt="Star-wars-header"
      />
      <h1 className="header-text">star wars films</h1>
    </header>
  );
}

export default Header;
