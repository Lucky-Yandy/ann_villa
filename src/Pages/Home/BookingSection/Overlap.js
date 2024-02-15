
import React from 'react'; 
import './BookingSection.css';
import { useTranslation} from 'react-i18next';
function Overlap({onClose}) {

  const {t} = useTranslation(); 
  return (
     <>
      <div className="overlay"></div>
      <div className="successpopup text-lg">
         
         <p>{t('overlap')}</p>
        <button onClick={onClose}>{t('closebutton')}</button>
      </div>
    </>
  );
}
export default Overlap;

