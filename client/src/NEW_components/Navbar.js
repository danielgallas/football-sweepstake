import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
          <a href="/lastmatch">Last match</a>
          <a href="/nextmatch">Next match</a>
          <a href="/allrounds">All matches - by rounds</a>
          <a href="/">All matches - by user</a>
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
