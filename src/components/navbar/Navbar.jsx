import React, { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>S</span>hreya
            <span>S</span>uroliya
          </h2>
        </div>
        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className='social-media-desktop'>
            <li>
              <a href="https://www.linkedin.com/in/shreya2000" target="_link">
                <FaLinkedin className='soc-i linkedin'/></a>
            </li>
            <li>
              <a href="https://github.com/shreyacasm" target="_git">
                <GoMarkGithub className='soc-i github'/></a>
            </li>
            <li>
              <a href="https://www.facebook.com/suroliya.shreya" target="_fb">
                <FaFacebookSquare className='soc-i facebook'/></a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;