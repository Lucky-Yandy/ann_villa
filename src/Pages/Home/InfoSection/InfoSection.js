import React,{useState} from 'react';
import iconsData from "../../../data/amenities.json";
import "./InfoSection.css";
import { useTranslation} from 'react-i18next'; 
const InfoSection = () => {
  
  const { t } = useTranslation();
  const topicons = t("ItemsOnTop", { returnObjects: true });
  const offers = t("items", { returnObjects: true });
  const [showMore, setShowMore] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const toggleShowMoreInfo = () => {
    setShowMoreInfo((prevShowMore) => !prevShowMore);
  };
   
  
  //////////////
  const [visibleItems, setVisibleItems] = useState(3); 
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const toggleShowMoreOffers = () => {
    setShowMore((prevShowMore) => !prevShowMore);
    console.log("is this working")
  };

  
  return (
    
   <section id="info" className="info--section text-lg">
     <div className="headIcons">
	<div className="headIconsSpace">
	  {topicons.map((topicon) => (
	    <div key={topicon.id} >
	      <img src={topicon.src} alt="Icon" className="iconSize" />
	      <span >{topicon.title}</span>
	    </div>
	  ))}
       </div>
     </div>
    
  
    <div className="profile text-lg ">
	<img className="profileSize" src="./img/hostProfile.png"/>
	<span>{t('hostname')}</span>
    </div> 
		
      <div className="sectionsPadding text-lg">
      <p style={{ marginBottom: '5px' }}>{t("content.paragraph1")}</p>
      <p style={{ marginBottom: '5px' }}>{t("content.paragraph2")}</p>
       {showMoreInfo && (
        <>
          <p style={{ marginBottom: '5px' }}>{t("content.paragraph3")}</p>
          <p style={{ marginBottom: '5px' }}>{t("content.paragraph4")}</p>
          <p style={{ marginBottom: '5px' }}>{t("content.paragraph5")}</p>
        </>
      )}
      
      <button className="InfoButton" 
          onClick={toggleShowMoreInfo}>{showMoreInfo ? t("ShowLessButton") : t("ShowMoreButton")}
       </button>
        <img src="./img/next.png"style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} alt="Description of the image" />
    </div>
 
   <div className=" sectionsPadding text-lg" >
      <p style={{ marginBottom: '10px' }} ><strong>{t('Whereyoullsleep')}</strong> </p>
      <div className="bedroomSection  text-sm" >
	 <div className="bedroomsDispaly">
	     
	     <div className="singleBedRoom"> 
	       <span> <img src="./icons/twoPersonbed.png"/>
	              <img src="./icons/air.png"/>
	               <img src="./icons/shower.png"/>
	               <img src="./icons/sanitary.png"/>
	               </span>
	        <p>{t('bedroom1')}</p>
	        <p>{t('firstQueenBed')}</p>
	    </div>
	     <div className="singleBedRoom"> 
		 <span><img src="./icons/single-bed.png"/>
		       <img src="./icons/single-bed.png"/>
		       <img src="./icons/air.png"/>
		      
	              </span>
		 <p>{t('bedroom2')}</p>
	         <p>{t('singleBeds')}</p>
	    </div>
	     <div className="singleBedRoom"> 
	        <span><img src="./icons/twoPersonbed.png"/>
	        <img src="./icons/air.png"/>
	        <img src="./icons/shower.png"/>
	        <img src="./icons/sanitary.png"/>
	            </span>
	        <p>{t('bedroom3')}</p>
	        <p>{t('secondQueenBed')}</p>
	    </div>
	</div>
      </div>  
      </div>
      
	<div className=" sectionsPadding text-lg">
	  <p style={{ marginBottom: '10px' }}><strong>{t('whatitoffers')}</strong> </p>
	    <div className="amenities text-sm">
                   {offers?.map((offer, id) => (
	            <div key={id} style={{ display: showMore ? 'flex' : (id < 10 ? 'flex' : 'none') }}>
		      <img src={offer.src} alt="Icon" className="iconSize" /> 
		        <span>{offer.title}</span> 
	              </div>
	  ))}
	  
         </div>
           {offers.length > 10 && (
	 <div>
	    <button className="InfoButton" onClick={toggleShowMoreOffers}>
	     {showMore ? t("ShowLessButton") : t("ShowMoreButton")}
	    </button>
	    <img src="./img/next.png"style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} alt="Description of the image" />
  </div>
	      )}
	      
	 </div>
  
 
  
   
    
    </section>
    
  );
};

export default InfoSection;


  




