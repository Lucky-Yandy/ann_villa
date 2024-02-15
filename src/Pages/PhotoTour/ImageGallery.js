import React, { useState } from 'react';
import "./PhotoTour.css";
import { useTranslation} from 'react-i18next';  
const ImageGallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {i18n,t} = useTranslation();
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery">
    
     <button className="close-button" onClick={onClose}>
        {t('closebutton')}
      </button>
     <button className=" nav-buttonLeft" onClick={goToPrev}>
          {'<'}
      </button>
     
      <div className="gallery-content">
        
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        
      </div>
      <button className=" nav-buttonRight" onClick={goToNext}>
          {'>'}
        </button>
    </div>
  );
};

export default ImageGallery;
