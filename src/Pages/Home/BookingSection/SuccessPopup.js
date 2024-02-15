
import React from 'react'; 
import './BookingSection.css';
import { useTranslation} from 'react-i18next';
function SuccessPopup({ onClose, numOfGuests, infantsNum, kidsOfGuests, fullName, phoneNum, email, checkIn, checkOut,totalPrice,fee,deposite}) {

  const {t} = useTranslation(); 
  return (
     <>
      <div className="overlay"></div>
      <div className="successpopup text-md">
         <h3> <span><img className="check" src="./icons/check.png"/> </span>{t('bookingsubpop1')}</h3> 
        <p>{t('bookingsubpop2')}</p>
        <div className="detailsdisplay">
        <p>{t('orderdetails')} </p>
        <ul>
          <li>{t('orderdetailsAdult')}: {numOfGuests}</li>
          <li>{t('orderdetailsChildren')}: {kidsOfGuests}</li>
          <li>{t('orderdetailsBaby')}: {infantsNum}</li>
          <li>{t('orderdetailsFullName')}: {fullName}</li>
          <li>{t('orderdetailsPhone')}: {phoneNum}</li>
          <li>{t('orderdetailsEmail')}: {email}</li>
          <li>{t('orderdetailscheckin')}: {new Date(checkIn).toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' })}</li>
<li>{t('orderdetailscheckout')}: {new Date(checkOut).toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' })}</li>
           <li>{t('total')}: €{(totalPrice+fee+deposite).toFixed(2)}</li>
        </ul>
        </div>
        <button onClick={onClose}>{t('closebutton')}</button>
      </div>
    </>
  );
}
export default SuccessPopup;

