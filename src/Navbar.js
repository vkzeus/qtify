import React from "react";
import { Link } from "react-router-dom";
import Button from "./button.js";
import LogoImage from "./logo.png"; // Renamed for clarity
import Search from "./Search.js";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* Render the logo image */}
      <img src={LogoImage} alt="Logo" className={styles.logo} />
      
      {/* Search bar component */}
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />

      {/* Feedback button */}
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
