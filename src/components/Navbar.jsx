import React, { useState } from "react";
import NavMenu from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <Link to="/" className="navbar__logo" id="logo">
        <span>Synaptic</span>
        <span>Entropy</span>
        <span>Creations</span>
      </Link>
      <NavMenu />
    </div>
  );
};

export default Navbar;
