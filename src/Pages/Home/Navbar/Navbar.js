import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./Navbar.css";
function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  function closeMenu() {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="ann_house_icon-container" >
        <img src="./img/ann_house_icon2.png" alt="ann_house_icon" /> 
      </div>
      <a href="#"
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="root"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="info"
              className="navbar--content"
            >
              Info
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="pic"
              className="navbar--content"
            >
              Pictures
            </Link>
          </li>
         
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="booking"
              className="navbar--content"
            >
             Price
            </Link>
          </li>
           <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="booking"
              className="navbar--content"
            >
             Booking
            </Link>
          </li>
          
           <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="reviews"
              className="navbar--content"
            >
             Reviews
            </Link>
          </li>
           <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="location"
              className="navbar--content"
            >
             Location
            </Link>
          </li>
           <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="reviews"
              className="navbar--content"
            >
             Contact
            </Link>
          </li>
        </ul>
      </div>
     
    </nav>
  );
}

export default Navbar;

/*
 <div
        className="navbar--active-content"
       
      ><img src="./img/EnglishButtom.png" alt="footerPic"/>
      </div>

*/










