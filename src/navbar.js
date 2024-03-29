// src/Navbar.js In this file I will write function of navbar for my website ak-react

import React from "react";

import './style.css';
import logo from './Media/logo.png';  // Corrected import path


function Navbar({ onLoginClick, onSignUpClick }) {
    return (
      <nav>
        <div>
          <img src={logo} alt="Restaurant Logo" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#menus">Menus</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#login" onClick={onLoginClick}>Login</a></li>
          <li><a onClick={onSignUpClick}>Sign Up</a></li>
        </ul>
      </nav>
    );
  }

export default Navbar;