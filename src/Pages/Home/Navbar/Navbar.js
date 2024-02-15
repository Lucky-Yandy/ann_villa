import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";
import { useTranslation} from 'react-i18next';  
//import { withI18n } from "react-i18next";
function Navbar( { handleLanguage,locale }) {
 

  const [isSelectVisible, setIsSelectVisible] = useState(false);
 
  const {i18n,t} = useTranslation();
  
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  function closeMenu() {
    setNavActive(false);
  }

  

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
 ///////////////
   const toggleSelectVisibility = () => {
    setIsSelectVisible(!isSelectVisible);
  };
 
 const closelanguageSelect = () => {
    setIsSelectVisible(false);
  };
  const handleLanguageSelection = (e) => {
    handleLanguage(e);
    setIsSelectVisible(false); // Close the select dropdown after selecting a language
  };
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="ann_house_icon-container">
        <img src="./img/ann_house_icon.png"  alt="ann house logo" />
      </div>
      <a
        href="#"
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="Home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
              className="navbar--content"
            >
              {t('Home')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="Booking"
              spy={true}
              smooth={true}
              offset={-120}
              duration={300}
              className="navbar--content"
            > 
            {t('Booking')}
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="Pic"
              spy={true}
              smooth={true}
              offset={-110}
              duration={300}
              className="navbar--content"
            >
              {t('Picture')}
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="Location"
              spy={true}
              smooth={true}
              offset={-90}
              duration={300}
              className="navbar--content"
            >
              {t('Location')} 
            </Link>
          </li>
           <li>
           <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
          to="Contact"
          className="navbar--content"
          >
          {t('Contact')} 
          </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              to="Reviews"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              className="navbar--content"
            >
               {t('Reviews')} 
            </Link>
          </li>
         
        </ul>
      </div>
        <div className="navbutton">
        <img src="./img/world.png" className="languageChangeIcon" 
                   onClick={toggleSelectVisibility}/>
          {isSelectVisible && (
          <select value={locale}  onChange={handleLanguageSelection} 
          style={{ border: 'none', backgroundColor: 'white',fontSize:'15px'}}>
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
          </select>
        )}   
        
        </div>
     
      
    </nav>
  );
}

export default Navbar;

