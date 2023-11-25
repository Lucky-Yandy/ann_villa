import data from "../../data/index.json";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
 
import "./PhotoTour.css";
//import arrow from "img/arrow.png";
function PhotoTour() {
  const navigate = useNavigate();
  
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div  className="photoTour" >
     
       <button onClick={(e) => {
          navigate(-1);
        }}>close 
        
      </button>
    
     <div className="photoTourNav">
     <h2 id ="topOfPage">PhotoTour</h2>
     <nav className="photoTourNav--links"> 
       
        <button onClick={() => handleNavigation("kitchenRoom")}> 
	  <img src={data.cover[0].src} alt="Photo" />
          <p className="image-label">{data.cover[0].title}</p>
        </button>
         <button onClick={() => handleNavigation("bedRoom1")}> 
	  <img src={data.cover[1].src} alt="Photo" />
          <p className="image-label">{data.cover[1].title}</p>
        </button>
         <button onClick={() => handleNavigation("bedRoom2")}> 
	  <img src={data.cover[2].src} alt="Photo" />
          <p className="image-label">{data.cover[2].title}</p>
        </button>
         <button  onClick={() => handleNavigation("livingRoom")} > 
	  <img src={data.cover[3].src} alt="Photo" />
          <p className="image-label">{data.cover[3].title}</p>
        </button>
           
        <button  onClick={() => handleNavigation("Exteriors")} > 
	  <img src={data.cover[4].src} alt="Photo" />
          <p className="image-label">{data.cover[4].title}</p>
        </button>  
        <button  onClick={() => handleNavigation("backyard")}> 
	  <img src={data.cover[5].src} alt="Photo" />
          <p className="image-label">{data.cover[5].title}</p>
        </button>  
         <button  onClick={() => handleNavigation("Addtions")}> 
	  <img src={data.cover[6].src} alt="Photo" />
          <p className="image-label">{data.cover[6].title}</p>
        </button> 
        <button  onClick={() => handleNavigation("diningRoom")}> 
	  <img src={data.cover[7].src} alt="Photo" />
          <p className="image-label">{data.cover[7].title}</p>
        </button> 
         <button  onClick={() => handleNavigation("pool")} > 
	  <img src={data.cover[8].src} alt="Photo" />
	   <p className="image-label">{data.cover[8].title}</p>
        </button> 
     
     </nav>
      
      <section id="kitchenRoom" className="photoSectionDisplay">
      <h2>Kichen Room</h2>
      <div className="photoSectionDisplay--pic">
      {data?.kitchenroom?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      
       <section id="bedRoom1" className="photoSectionDisplay">
        <h2>Bed Room 1</h2>
        <div className="photoSectionDisplay--pic">
           {data?.bedroom1?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      <section id="bedRoom2" className="photoSectionDisplay">
        <h2>Bed Room 2</h2>
        <div className="photoSectionDisplay--pic">
           {data?.bedroom2?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      
      <section id="livingRoom" className="photoSectionDisplay">
        <h2>Living Room</h2>
        <div className="photoSectionDisplay--pic">
           {data?.livingroom?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
       <section id="Exteriors" className="photoSectionDisplay">
        <h2>Exteriors</h2>
        <div className="photoSectionDisplay--pic">
           {data?.exteriors?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      
      
       
    
       <section id="backyard" className="photoSectionDisplay">
        <h2>Backyard</h2>
        <div className="photoSectionDisplay--pic">
           {data?.backyard?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      <section id="Addtions" className="photoSectionDisplay">
        <h2>Addtions</h2>
        <div className="photoSectionDisplay--pic">
           {data?.additions?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      <section id="diningRoom" className="photoSectionDisplay">
        <h2>Dining Room</h2>
        <div className="photoSectionDisplay--pic">
           {data?.dingroom?.map((photo, index)=>( 
            <div key={index}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      </section>
      
      </div>
    </div>
  );
}

export default PhotoTour;
