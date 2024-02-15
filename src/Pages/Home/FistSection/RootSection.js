import React from 'react';
import "./RootSection.css";
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';  
 function RootSection(){
  const {t} = useTranslation();
  
  return( 
      
      <section id="Home" className="home--section" > 
      <div className="homePhoto">
       <img src="./img/homepagebackground.jpg" alt="background" /> 
        <div className="indexInner">  
         <h2> {t('VillaName')}</h2>
        <Link to="/photos" >              
           <button  className="show-more-button">
             <img src="./img/morepic.png" alt="Icon" className="button-icon" />
           {t('ShowMorePhotos')}</button>  
           </Link>      
       </div>
       </div>
      </section>
  
  ) 

}
export default RootSection;
