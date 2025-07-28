import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <div className="links">
        <a>Masterpieces</a>
        <a>Gallery</a>
        <a>Paintings</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
