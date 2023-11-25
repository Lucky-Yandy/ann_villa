import data from "../../../data/index.json";
import React from 'react';
import PhotoTour from "../../PhotoTour/PhotoTour.js";
import { Link } from 'react-router-dom';
import "./PictureSection.css";
function PictureSection(){
  
   
 return(
    <section id="pic" className="photo--section">
     
     <h2>Where you'll sleep</h2>
     <div className="displayCoverPic">
          <div  className="first-pic">
             <Link to="/photos">     
	       <img src={data.cover[0].src} alt=""/>
	     </Link> 
	  </div>
	  
	    <div  className="thesecond-pic">
             <Link to="/photos">     
	       <img src={data.cover[1].src} alt="" />
	     </Link> 
	  </div>
    
      <div  className="thethird-pic">
             <Link to="/photos">     
	       <img src={data.cover[2].src} alt=""/>
	     </Link> 
	  </div>
      <div  className="fourth-pic">
             <Link to="/photos">     
	       <img src={data.cover[3].src} alt="" />
	     </Link> 
       </div>
	<div  className="fifth-pic">
             <Link to="/photos">     
	       <img src={data.cover[4].src} alt=""/>
	     </Link> 
	</div>
     </div>
 
    
   
    </section>
 );

}

export default PictureSection;
