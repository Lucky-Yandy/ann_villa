import React from 'react';
import "./RootSection.css";
import homepagebackground from "../../../img/homepagebackground.webp";
 function RootSection(){
  return( 
      <section id="root" className="home--section" >
       <img src={ homepagebackground} alt="background" /> 
      <div className="home-box"></div> 
      <div className="home--indexInner">
       <h1>Seaside Spanish Villa</h1>
       <h2>Price: $474 for 3 nights </h2>
       </div>
      </section>
  
  )
  

}


export default RootSection;
