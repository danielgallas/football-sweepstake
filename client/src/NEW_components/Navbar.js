import React, { useRef } from "react";
import { FaBars, FaBraille, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h3>Sweepstake</h3>
        <nav ref={navRef}>
          <a href="/">Leaderboard</a>
          <a href="/">Last match</a>
          <a href="/">Next match</a>
          <a href="/">All matches - by user</a>
          <a href="/">All matches - by match</a>
          <a href="/">Fun stats</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
