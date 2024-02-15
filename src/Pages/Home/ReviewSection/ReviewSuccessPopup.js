import "./ReviewSection.css";
import React, { useState, useEffect,useRef } from 'react';
import { useTranslation} from 'react-i18next'; 
function ReviewSuccessPopup({onClose}) {
  
  const { t } = useTranslation();
  return (
    
      <div className="reviewOverlay">
      <div className="reviewSuccesspopup text-lg">
          
        <p>{t('reviewSuccesspopup')} </p>
        
        <button onClick={onClose}>{t('closebutton')}</button>
      </div>
      </div>
    
  );
}
export default ReviewSuccessPopup;
