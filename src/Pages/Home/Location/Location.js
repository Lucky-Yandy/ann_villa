
import React, { useState } from 'react';
import "./Location.css";
import { useTranslation} from 'react-i18next';  
function LocationSection(){
  const {t} = useTranslation(); 
   
  return(
    <section id="Location" className="locationSection text-lg">
     
     <h2>{t('Location')}</h2>
      <div >{t('locationInfo')}</div>
       <div className="mapdisplay">
         <div className="googlemap"> 
	    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1597718.681798028!2d-0.9465378!3d38.5442715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63db8f9b7b1c05%3A0x603e94b9cf6d35d4!2s03630%20Sax%2C%20Alicante%2C%20Spain!5e0!3m2!1sen!2sus!4v1705684201451!5m2!1sen!2sus" 
	      className="mapsize" 
	      style={{border:0}}
	      allowFullScreen=""
	      loading="lazy" 
	      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p style={{color:'MidnightBlue' ,textAlign: 'left' }}>{t('locationNote')}</p>
     </div>
       <ul className="linkslayout text-md" >
       
       <li>
          <a href="https://lasfuentesdelalgar.com/en/home-english/">Lasfuentesdelalgar (Nature water fall)</a>
          </li>
        <li>
          <a href="https://www.wikiloc.com/hiking-trails/rabosa-circular-castellarets-albergue-de-la-rabosa-parc-de-muntanya-daniel-esteve-98576576">Hiking route Rabosa, Alicante, Spain</a>
        </li>
        <li>
         <a href="https://www.wikiloc.com/bicycle-touring-trails/sax-cazorla-nacimiento-rio-mundo-rio-segura-rio-borosa-28027739">Bike route Sax-Cazorla, Alicante, Spain
          </a>
        </li>
        <li><a href="https://www.alltrails.com/trail/spain/alicante/rambla-de-puca-los-castellarets-el-salt?u=i">Rambla de Puça - Los Castellarets - El Salt, Alicante, Spain</a></li>
        <li>
        <a href="https://www.alltrails.com/trail/spain/alicante/balcon-de-alicante-sierra-del-maigmo--2?u=i">Balcón de Alicante - Sierra del Maigmó, Alicante, Spain</a>
        </li>
        <li>
         <a href="https://alanniaresorts.hoteltreats.com/en">Romantic escape: Alanniaresorts for Spa & Wellness & Dining</a>
        </li>
        
        <li>
         <a  href="https://www.getyourguide.nl/alicante-l414/">Alicante, Spain: Best places to visit</a>
        </li>
         <li>
         <a  href="https://www.tripadvisor.co.uk/Tourism-g1064249-Villena_Province_of_Alicante_Valencian_Community-Vacations.html">Villena, Alicante, Spain: Best places to visit</a>
        </li>
         <li>
         <a  href="https://www.tripadvisor.co.uk/Tourism-g1064241-Sax_Province_of_Alicante_Valencian_Community-Vacations.html">Sax, Alicante, Spain: Best places to Visit</a>
        </li>
        <li>
         <a  href="https://www.tripadvisor.com/Attractions-g187524-Activities-c52-Province_of_Alicante_Valencian_Community.html">THE 10 BEST Water & Amusement Parks in Province of Alicante (tripadvisor.com)</a>
        </li>
       </ul>
  
      </div>
    </section>
 );

}

export default LocationSection;



/*<div className="locationImgSize">
         <img src="./img/location.png"/>
         <p className="locationCaption">{t('locationNote')}</p>
         <img  className="locaticonIcon"
               src="./img/location.gif"/>
               
      </div>*/
