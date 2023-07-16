import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/images/logo.png.webp";

const Header = () => {
  return (
    <header className="header">
        <div className="topList">
        <ul className="topBar">
          <li className="topItem">
          <NavLink to="/">20:00 - May 19, 2019</NavLink>
          </li>
          <li className="topItem">
          <NavLink to="/">Sign in</NavLink>
          </li>
          <li className="topItem">
          <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
        <ul className="socialList">
        <li className="socialItem">
          <NavLink to="/"><i className="fa-brands fa-facebook"></i></NavLink>
          </li>
          <li className="socialItem">
          <NavLink to="/"><i class="fa-brands fa-vimeo-v"></i></NavLink>
          </li>
          <li className="socialItem">
          <NavLink to="/"><i class="fa-brands fa-twitter"></i></NavLink>
          </li>
          <li className="socialItem">
          <NavLink to="/"><i class="fa-brands fa-google-plus-g"></i></NavLink>
          </li>
          <li className="socialItem">
          <NavLink to="/"><i class="fa-brands fa-instagram"></i></NavLink>
          </li>
        </ul>
        </div>
      <div className="container">
        <nav className="navBar">
          <div className="logo">
            <img src={logoImg} alt="logo" />
          </div>
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/clup">CLUP</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/schedule">SCHEDULE</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/results">RESULTS</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/sport">SPORT</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/pages">PAGES</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li className="searchbtn">
            <i className="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
