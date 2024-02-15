import data from "../../../data/index.json";
import React from 'react';
import PhotoTour from "../../PhotoTour/PhotoTour.js";
import { Link } from 'react-router-dom';
import "./PictureSection.css";
import { useTranslation} from 'react-i18next';  

function PictureSection(){
  
 const {i18n,t} = useTranslation(); 
 return(
    <section id="Pic" className="photo--section  text-lg">
     
     <h2>{t('Picture')}</h2>
     <div className="displayCoverPic">
          <div  className="first-pic">
             <Link to="/photos">     
	       <img src={data.homepagePic[0].src} alt=""/>
	     </Link> 
	    
	  </div>
	  
	 
	    <div  className="thesecond-pic">
             <Link to="/photos">     
	       <img src={data.homepagePic[1].src} alt="" />
	     </Link> 
	  </div>
    
      <div  className="thethird-pic">
             <Link to="/photos">     
	       <img src={data.homepagePic[2].src} alt=""/>
	     </Link> 
	  </div>
      <div  className="fourth-pic">
             <Link to="/photos">     
	       <img src={data.homepagePic[3].src} alt="" />
	     </Link> 
       </div>
	<div  className="fifth-pic">
             <Link to="/photos">     
	       <img src={data.homepagePic[4].src} alt=""/>
	     </Link> 
	</div>
	  
	  <div>
	    <Link to="/photos"  className="show-more-button"> 
           <button style={{border:'none',backgroundColor: 'transparent', color:'black'}} >
           
             <img src="./img/morepic.png" alt="Icon" className="button-icon" />
             
              {t('ShowMorePhotos')}
              </button>
               </Link> 
	</div>
     </div>
 
    
    
    </section>
 );

}

export default PictureSection;
