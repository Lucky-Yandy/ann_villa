
import React from 'react'; 
import './BookingSection.css';
import { useTranslation} from 'react-i18next';
function CheckInAndOutForHouseRole() {
   const {t} = useTranslation();
  
  return (
    <div className="CheckInAndOut">
     
     <div>{t('checkin')}
     <p>{t('checkinTime')}</p>
     </div>
      <div>{t('checkout')}
       <p>{t('checkoutTime')}</p>
      </div>
      
    </div>
  );
}
export default CheckInAndOutForHouseRole;

