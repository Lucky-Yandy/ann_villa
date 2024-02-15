import "./ContactMe.css";
import React, { useState, useEffect,useRef } from 'react';
import { useTranslation} from 'react-i18next';
function ContactSuccessPopup({onClose}) {

  const {i18n,t} = useTranslation(); 
  return (
     <>
      <div className="contactOverlay"></div>
      <div className="contactSuccesspopup">
          
        <p>{t('contactSuccesspopup')} </p>
        
        <button onClick={onClose}>{t('closebutton')}</button>
      </div>
    </>
  );
}
export default ContactSuccessPopup;
