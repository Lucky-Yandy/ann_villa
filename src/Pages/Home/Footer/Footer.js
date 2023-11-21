import { Link } from "react-scroll";
//import react from "react";
import "./Footer.css";
function Footer() {
  
 



  return (
    <footer  className="footer--container">
      <div className="footer--link--container">
        <div className="ann_house_icon-container" >
        <img src="./img/ann_house_icon2.png" alt="ann_house_icon" /> 
      </div>
        <div className="footer--items">
         <ul>
          <li>
            <Link
           
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
              
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="navbar--content"
            >
             Contact
            </Link>
          </li>
        </ul>
      </div>
      <Link
      
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Language
      </Link>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/Lucky-Yandy"
                className="navbar--content"
                
              ><img src="./img/icons8-facebook-64.png" alt="img" className="footer--img" />
               
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/yanzhu-tech"
                className="navbar--content"
              
              ><img src="./img/icons8-instagram-64.png" alt="img" className="footer--img" />
               
              </a>
            </li>
           
          </ul>
        </div>
     
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Yan</p>
        <div className="footer--social--icon">
          <ul>      
            <li>
                copyright © Yan Zhu 2023
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
