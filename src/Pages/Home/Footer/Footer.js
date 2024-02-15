import { Link } from "react-scroll";
//import react from "react";
import "./Footer.css";
import { useTranslation} from 'react-i18next';
function Footer() {

  const {i18n,t} = useTranslation(); 
  return (
    <footer  className="footer--container">
      <div className="footer--link--container">
        <div className="ann_house_icon-container" >
        <img src="./img/ann_house_icon.png" alt="ann_house_icon" /> 
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
              {t('Home')}
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
               {t('Info')}
            </Link>
          </li>
          <li>
            <Link
            
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Pic"
              className="navbar--content"
            >
               {t('Picture')}
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
             {t('Price')}
            </Link>
          </li>
           <li>
            <Link
            
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Booking"
              className="navbar--content"
            >
             {t('Booking')}
            </Link>
          </li>
           <li>
            <Link
             
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Location"
              className="navbar--content"
            >
             {t('Location')}
            </Link>
          </li>
           <li>
            <Link
            
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Reviews"
              className="navbar--content"
            >
             {t('Reviews')}
            </Link>
          </li>
          
         
         
        </ul>
      </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/villaspain.nl"
                className="navbar--content"
                
              ><img src="./img/instagram.png" alt="img" className="footer--img" />
               
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/yanzhu-tech"
                className="navbar--content"
              
              ><img src="./img/facebook.png" alt="img" className="footer--img" />
               
              </a>
            </li>
           
          </ul>
        </div>
       
        </div>
       
     
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content"></p>
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
