
import React, { useState } from 'react';
import "./Location.css";

function LocationSection(){
  
   
 return(
    <section id="location" className="locationSection">
     
     <h2>Location</h2>
      <div> Santa Cruz, California, United States Aptos</div>
    
      <div className="locationImgSize" >
         <img src="./img/location.png"/>
         <img  className="locaticonIcon"
               src="./img/locationIcon.png"/>
      </div>
 
  
    </section>
 );

}

export default LocationSection;
