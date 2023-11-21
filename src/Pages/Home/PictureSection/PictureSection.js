import data from "../../../data/index.json";
import React, { useState } from 'react';
import PhotoTour from "../../PhotoTour/PhotoTour.js";
import { Link } from 'react-router-dom';
import "./PictureSection.css";
function PictureSection(){
  
   
 return(
    <section id="pic" className="photo--section">
     
     <h2>Where you'll sleep</h2>
     <div className="displayCoverPic">
          <div  className="first-pic">
             <a href="/photos#topOfPage">     
	       <img src={data.cover[0].src} alt="Photo" />
	     </a> 
	  </div>
	  
	    <div  className="thesecond-pic">
             <a href="/photos#topOfPage">     
	       <img src={data.cover[1].src} alt="Photo" />
	     </a> 
	  </div>
    
      <div  className="thethird-pic">
             <a href="/photos#topOfPage">     
	       <img src={data.cover[2].src} alt="Photo" />
	     </a> 
	  </div>
      <div  className="fourth-pic">
             <a href="/photos#topOfPage">     
	       <img src={data.cover[3].src} alt="Photo" />
	     </a> 
       </div>
	<div  className="fifth-pic">
             <a href="/photos#topOfPage">     
	       <img src={data.cover[4].src} alt="Photo" />
	     </a> 
	</div>
     </div>
 
    
   
    </section>
 );

}

export default PictureSection;
