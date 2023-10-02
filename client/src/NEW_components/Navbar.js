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
        <a href="/" style={{ textDecoration: "none" }}>
          <h3>Sweepstake</h3>
        </a>
        <nav ref={navRef}>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/lastmatch">Last match</a>
          <a href="/nextmatch">Next match</a>
          <a href="/allrounds">All matches - by rounds</a>
          <a href="/allusers">All matches - by user</a>
          <a href="/funstats">Fun stats</a>
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
