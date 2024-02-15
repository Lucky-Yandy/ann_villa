
import React, { useState, useEffect } from 'react'; 
import './BookingSection.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
function SHowHoseRole() {
   const {t} = useTranslation(); 
   
   const navigate = useNavigate();
  
   const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div  id="showHouseRoles" className="photoTour" >
     
       <button className="photoTourBackButton" onClick={(e) => {navigate(-1);}}>
        <img src="./img/arrow.png"/>
      </button>
    
     <div  className="photoTourNav">
    
      <div className=" houseRolepopup text-md">    
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{t('houserole1')}</p>
       <ul>
       <li style={{ fontWeight: 'bold'}}>{t('houserole2')}</li>
       <li><p style={{ fontWeight: 'bold'}}>{t('houserole3')}</p>
       <ol>
       <li>{t('houserole4')}</li>
       <li>{t('houserole5')}</li>
       </ol>
   </li>
       <li><p style={{ fontWeight: 'bold'}}>{t('houserole6')}</p>

      <ol>
	<li>{t('houserole7')}</li>
	<li>{t('houserole8')}</li>
	<li>{t('houserole9')}</li>
	<li>{t('houserole10')}</li>
	<li>{t('houserole11')}</li>
	<li>{t('houserole12')}</li>
	<li>{t('houserole13')}</li>
      </ol>	
    </li>
   
    </ul> 
  
      </div>
       <div className=" houseRolepopup text-md">
          
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{t('houserole14')}</p>
       <ul>
       <li >{t('houserole15')}</li>
       <li>{t('houserole16')}</li>
      
	<li>{t('houserole17')}</li>
	<li>{t('houserole18')}</li>
	<li>{t('houserole19')}</li>
	<li>{t('houserole20')}</li>
	<li>{t('houserole21')}</li>
	
    </ul> 
      </div>
  
       <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{t('houserole22')}
       <span style={{color:'blue'}}>{t('houserole23')}</span>.</p>
      
    
      </div>
      <div style={{ height: '400px' }}/>
    </div>
  );
}
export default SHowHoseRole;

