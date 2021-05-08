import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {

  return (
    <div className="header">
      <div className="nav_bar">
        <Navbar />
      </div>

      <div className="items">
        Guest's Dashboard
      </div>

      

    </div>
  );
}

export default Header;