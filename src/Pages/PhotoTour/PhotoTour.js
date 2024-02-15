import data from "../../data/index.json";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
 import ImageGallery from './ImageGallery.js';
import "./PhotoTour.css";
import { useTranslation} from 'react-i18next';  
function PhotoTour() {
  const navigate = useNavigate();
  const {i18n,t} = useTranslation();
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  /////////////////////
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openGallery = (index) => {
    setSelectedImage(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setSelectedImage(null);
  };
  /////////////////////////
  const [galleryOpen2, setGalleryOpen2] = useState(false);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const openGallery2 = (index) => {
    setSelectedImage2(index);
    setGalleryOpen2(true);
  };

  // Function to close the second gallery
  const closeGallery2 = () => {
    setGalleryOpen2(false);
    setSelectedImage2(null);
  };
  
  //////////////////////////
  const [galleryOpen3, setGalleryOpen3] = useState(false);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const openGallery3 = (index) => {
    setSelectedImage3(index);
    setGalleryOpen3(true);
  };

  // Function to close the bbq gallery
  const closeGallery3 = () => {
    setGalleryOpen3(false);
    setSelectedImage3(null);
  };
  //////////////////////////
  
   const [galleryOpenPool, setGalleryOpenPool] = useState(false);
  const [selectedImagePool, setSelectedImagePool] = useState(null);
  const openGalleryPool = (index) => {
    setSelectedImagePool(index);
    setGalleryOpenPool(true);
  };

 
  const closeGalleryPool = () => {
    setGalleryOpenPool(false);
    setSelectedImagePool(null);
  };
  //////////////master bed////////////////////
     const [galleryOpenMasterBedRoom, setGalleryOpenMasterBedRoom] = useState(false);
  const [selectedImageMasterBedRoom, setSelectedImageMasterBedRoom] = useState(null);
  const openGalleryMasterBedRoom = (index) => {
    setSelectedImageMasterBedRoom(index);
    setGalleryOpenMasterBedRoom(true);
  };

  
  const closeGalleryMasterBedRoom = () => {
    setGalleryOpenMasterBedRoom(false);
    setSelectedImageMasterBedRoom(null);
  };
  /////////////////////cooking///////////////////
    const [galleryOpenCookingRoom, setGalleryOpenCookingRoom] = useState(false);
  const [selectedImageCookingRoom, setSelectedImageCookingRoom] = useState(null);
  const openGalleryCookingRoom = (index) => {
    setSelectedImageCookingRoom(index);
    setGalleryOpenCookingRoom(true);
  };

 
  const closeGalleryCookingRoom = () => {
    setGalleryOpenCookingRoom(false);
    setSelectedImageCookingRoom(null);
  };
  /////////////////living//////////////////
    const [galleryOpenLivingRoom, setGalleryOpenLivingRoom] = useState(false);
  const [selectedImageLivingRoom, setSelectedImageLivingRoom] = useState(null);
  const openGalleryLivingRoom = (index) => {
    setSelectedImageLivingRoom(index);
    setGalleryOpenLivingRoom(true);
  };

 
  const closeGalleryLivingRoom = () => {
    setGalleryOpenLivingRoom(false);
    setSelectedImageLivingRoom(null);
  };
  //////////////////bedroom2/////////////////
  const [galleryOpenSBRoom, setGalleryOpenSBRoom] = useState(false);
  const [selectedImageSBRoom, setSelectedImageSBRoom] = useState(null);
  const openGallerySBRoom = (index) => {
    setSelectedImageSBRoom(index);
    setGalleryOpenSBRoom(true);
  };

 
  const closeGallerySBRoom = () => {
    setGalleryOpenSBRoom(false);
    setSelectedImageSBRoom(null);
  };
  ////////////////////two sinngle beds room/////////////////////
  const [galleryOpenTSBRoom, setGalleryOpenTSBRoom] = useState(false);
  const [selectedImageTSBRoom, setSelectedImageTSBRoom] = useState(null);
  const openGalleryTSBRoom = (index) => {
    setSelectedImageTSBRoom(index);
    setGalleryOpenTSBRoom(true);
  };

 
  const closeGalleryTSBRoom = () => {
    setGalleryOpenTSBRoom(false);
    setSelectedImageTSBRoom(null);
  };
  ////////////////////////////////
   const [galleryOpenOthers, setGalleryOpenOthers] = useState(false);
  const [selectedImageOthers, setSelectedImageOthers] = useState(null);
  const openGalleryOthers = (index) => {
    setSelectedImageOthers(index);
    setGalleryOpenOthers(true);
  };

 
  const closeGalleryOthers = () => {
    setGalleryOpenOthers(false);
    setSelectedImageOthers(null);
  };
  
  const [galleryOpenSurroundings, setGalleryOpenSurroundings] = useState(false);
  const [selectedImageSurroundings, setSelectedImageSurroundings] = useState(null);
   const openGallerysurroundings = (index) => {
     setSelectedImageSurroundings(index);
   setGalleryOpenSurroundings(true);
  };

   
   const closeGallerySurroundings = () => {
    setGalleryOpenSurroundings(false);
    setSelectedImageSurroundings(null);
  };
  
  return (
    <div  id="topOfPage" className="photoTour" >
     
       <button className="photoTourBackButton" onClick={(e) => {navigate(-1);}}>
        <img src="./img/arrow.png"/>
      </button>
    
     <div  className="photoTourNav">
     <h2 >{t('phototour')}</h2>
     <nav className="photoTourNav--links"> 
       
        <button onClick={() => handleNavigation("frontGarden")}> 
	  <img src={data.cover[0].src} alt="Photo" />
          <p className="image-label">{t('photonav1')}</p>
        </button>
         <button onClick={() => handleNavigation("sideGarden")}> 
	  <img src={data.cover[1].src} alt="Photo" />
          <p className="image-label">{t('photonav2')}</p>
        </button>
         <button onClick={() => handleNavigation("bbq")}> 
	  <img src={data.cover[2].src} alt="Photo" />
          <p className="image-label">{t('photonav3')}</p>
        </button>
         <button  onClick={() => handleNavigation("pool")} > 
	  <img src={data.cover[3].src} alt="Photo" />
          <p className="image-label">{t('photonav4')}</p>
        </button>
           
        <button  onClick={() => handleNavigation("masterRoom")} > 
	  <img src={data.cover[4].src} alt="Photo" />
          <p className="image-label">{t('photonav5')}</p>
        </button>  
        <button  onClick={() => handleNavigation("cookingroom")}> 
	  <img src={data.cover[5].src} alt="Photo" />
          <p className="image-label">{t('photonav6')}</p>
        </button>  
         <button  onClick={() => handleNavigation("livingroom")}> 
	  <img src={data.cover[6].src} alt="Photo" />
          <p className="image-label">{t('photonav7')}</p>
        </button> 
        <button  onClick={() => handleNavigation("secondBedroom")}> 
	  <img src={data.cover[7].src} alt="Photo" />
          <p className="image-label">{t('photonav8')}</p>
        </button> 
         <button  onClick={() => handleNavigation("twoSingleRoom")} > 
	  <img src={data.cover[8].src} alt="Photo" />
	   <p className="image-label">{t('photonav9')}</p>
        </button> 
         <button  onClick={() => handleNavigation("others")} > 
	  <img src={data.cover[12].src} alt="Photo" />
	   <p className="image-label">{t('photonav10')}</p>
        </button> 
        <button  onClick={() => handleNavigation("morePic")} > 
	  <img src={data.cover[13].src} alt="Photo" />
	   <p className="image-label">{t('Surroundings')}</p>
        </button> 
         
     
     </nav>
      
      <section id="frontGarden" className="photoSectionDisplay">
      <h2>{t('photonav1')}</h2>
      <div className="photoSectionDisplay--pic">
      {data?.frontGarden?.map((photo, index)=>( 
            <div key={index}  onClick={() => openGallery(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpen && (
        <ImageGallery
          images={data?.frontGarden.map((photo) => photo.src)}
          onClose={closeGallery}
        />
      )}
      </section>
      
       <section id="sideGarden" className="photoSectionDisplay">
        <h2>{t('photonav2')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.sideGarden?.map((photo, index)=>( 
            <div key={index} onClick={() => openGallery2(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpen2 && (
        <ImageGallery
          images={data?.sideGarden.map((photo) => photo.src)}
          onClose={closeGallery2}
        />
      )}
      </section>
      <section id="bbq" className="photoSectionDisplay">
        <h2>{t('photonav3')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.bbq?.map((photo, index)=>( 
            <div key={index} onClick={() => openGallery3(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      {galleryOpen3 && (
        <ImageGallery
          images={data?.bbq.map((photo) => photo.src)}
          onClose={closeGallery3}
        />
      )}
      </section>
      
      <section id="pool" className="photoSectionDisplay">
        <h2>{t('photonav4')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.pool?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryPool(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpenPool && (
        <ImageGallery
          images={data?.pool.map((photo) => photo.src)}
          onClose={closeGalleryPool}
        />
      )}
      
      </section>
       <section id="masterRoom" className="photoSectionDisplay">
        <h2>{t('photonav5')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.masterBedroom?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryMasterBedRoom(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpenMasterBedRoom && (
        <ImageGallery
          images={data?.masterBedroom.map((photo) => photo.src)}
          onClose={closeGalleryMasterBedRoom}
        />
      )}
      </section>
      
      
       
    
       <section id="cookingroom" className="photoSectionDisplay">
        <h2>{t('photonav6')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.cookingAnsDinning?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryCookingRoom(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
      {galleryOpenCookingRoom && (
        <ImageGallery
          images={data?.cookingAnsDinning.map((photo) => photo.src)}
          onClose={closeGalleryCookingRoom}
        />
      )}
      </section>
      <section id="livingroom" className="photoSectionDisplay">
        <h2>{t('photonav7')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.livingroom?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryLivingRoom(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpenLivingRoom && (
        <ImageGallery
          images={data?.livingroom.map((photo) => photo.src)}
          onClose={closeGalleryLivingRoom}
        />
      )}
      </section>
      <section id="secondBedroom" className="photoSectionDisplay">
        <h2>{t('photonav8')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.secondBedRoom?.map((photo, index)=>( 
            <div key={index} onClick={() => openGallerySBRoom(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpenSBRoom && (
        <ImageGallery
          images={data?.secondBedRoom.map((photo) => photo.src)}
          onClose={closeGallerySBRoom}
        />
      )}
      </section>
      
      <section id="twoSingleRoom" className="photoSectionDisplay">
        <h2>{t('photonav9')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.twoSingleBedRoom?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryTSBRoom(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
        {galleryOpenTSBRoom && (
        <ImageGallery
          images={data?.twoSingleBedRoom.map((photo) => photo.src)}
          onClose={closeGalleryTSBRoom}
        />
      )}
      </section>
     
      <section id="others" className="photoSectionDisplay">
        <h2>{t('photonav10')}</h2>
        <div className="photoSectionDisplay--pic">
           {data?.others?.map((photo, index)=>( 
            <div key={index} onClick={() => openGalleryOthers(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
        {galleryOpenOthers && (
        <ImageGallery
          images={data?.others.map((photo) => photo.src)}
          onClose={closeGalleryOthers}
        />
      )}
      </section>
    
     <section id="morePic" className="photoSectionDisplay">
      <h2>{t('Surroundings')}</h2>
      <div className="photoSectionDisplay--pic">
      {data?.surroundings?.map((photo, index)=>( 
            <div key={index}  onClick={() => openGallerysurroundings(index)}>   
	     <img src={photo.src} alt="Photo" />
             </div>
            
	    ))}
      
      </div>
       {galleryOpenSurroundings && (
        <ImageGallery
          images={data?.surroundings.map((photo) => photo.src)}
          onClose={closeGallerySurroundings}
        />
      )}
      </section>
    
    
    
      </div>
    </div>
  );
}

export default PhotoTour;
