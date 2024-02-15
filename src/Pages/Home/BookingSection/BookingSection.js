import './BookingSection.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import { differenceInCalendarDays } from 'date-fns';
import theChangableBase from'../base.js';
import SuccessPopup from './SuccessPopup.js';
import Completedform from './Completedform.js';
import Overlap from './Overlap.js';
//import SHowHoseRole from './ShowHouseRoles.js';
import CheckInAndOutForHouseRole from './CheckInAndOut.js';
import {DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import InfoSection from '../InfoSection/InfoSection.js';

import { useTranslation} from 'react-i18next';
 
const BookingSection = () => {
  const {t} = useTranslation();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const timeZone = "Europe/Berlin";
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [kidsOfGuests, setKidsOfGuests] = useState(0);
   const [infantsNum, setInfantsNum] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
 // const numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  
  const [minDate,setMinDate]=useState('');
   const [fetchDates, setFetchDates] = useState({});
  const [disabledDates,setDisabledDates]=useState([]);
  const [fetchPricesAndFee, setPricesAndFee] = useState([]);
  const [singlePrice,setSinglePrice]=useState(0);
  const [totalPrice,setTotalPrice]=useState(0);
  const [fee,setFee]=useState(0);
  const [deposite,setDeposite]=useState(0);
   const [totalWithEverthing,setDTotalWithEverthing]=useState(0);
  const [dropDown,setDropDown]=useState(false);
 
  const [showBookingSuccessPopup, setShowBookingSuccessPopup] = useState(false);
  const [showHouseRoles, setShowHouseRoles] = useState(false);
  
  const [overlapMessage, setOverlapMessage] = useState(false);
  const [formFillMessage, setFormFillMessage] = useState(false);
  
 //fetch data from airtable//
 
  useEffect(() => {
    const fetchData = async () => {
    const allRecordsOfDates = [];

    await theChangableBase('Carlendar Notes')
      .select({ view: 'Grid view' })
      .eachPage(
        (records, fetchNextPage) => {
           allRecordsOfDates.push(...records);
          fetchNextPage();
        },
        async (err) => {
	      if (err) {
		//console.error('Error fetching records:', err);
	      } else {
		 
	         
                 //console.log("check the fetched disable dates:",allRecordsOfDates);
                const curentFetchDates = allRecordsOfDates.map(record => ({
                       start: record.fields.StartDate,
                       end: record.fields.EndDate,
                      }));
                 //console.log("here is the current dates", curentFetchDates);     
                 setFetchDates(curentFetchDates);
           }
        }
      );
     const allRecordsOfPricesAndFee = [];
     await theChangableBase('PriceAndFee')
        .select({ view: 'Grid view' })
        .eachPage(
          (records, fetchNextPage) => {
           allRecordsOfPricesAndFee.push(...records);
            fetchNextPage();
          },
          async (err) => {
            if (err) {
              //console.error('Error fetching records from Price:', err);
            } else {
             
              const curentPricesAndFee = allRecordsOfPricesAndFee.map(record => ({
                start: record.fields.SeasonStartDate,
                end: record.fields.SeasonEndDate,
                price: record.fields.Price,
                fee: record.fields.CleaningFee,
                season: record.fields.Seasons,
                deposite: record.fields.Deposite,
              }));
              setPricesAndFee(curentPricesAndFee);
              //console.log("the price and fee are",curentPricesAndFee);
              
             
            }
          }
        ); 
      
   };
  fetchData();
  }, []);

  
 ///////////////////////////////////////////////////
 const calculateNumberOfNights = () => {
   if (!checkIn || !checkOut || checkOut < checkIn) {
    return 0;
  }
  const nights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  return Math.max(nights, 0); // Ensure the number of nights is non-negative
};

const numberOfNights = calculateNumberOfNights();

 
 
 
 ////get dates between
  function getDatesBetween(startDate, endDate) {
	  const datesArray = [];
	  let currentDate = new Date(startDate);
	  while (currentDate <= endDate) {
	   const formattedEachDate = currentDate.toLocaleDateString();
	    //console.log("formattedEachDate", formattedEachDate);
	    datesArray.push(formattedEachDate);
	    currentDate.setDate(currentDate.getDate() + 1);
      }
	  return datesArray;
	}
 
 
 
  useEffect(() => {
  if (Array.isArray(fetchDates)) {
   
    const updatedDisabledDates = fetchDates.map((record,index) => {
      const newStart = new Date(record.start);
      const newEnd = new Date(record.end);
      const options = { timeZone };
      const dateArrayBetween = getDatesBetween(newStart, newEnd);
      //console.log("hehe dateArrayBetween ",dateArrayBetween)
      return dateArrayBetween.map(date => new Date(date).toLocaleDateString(undefined,options));
    });
    const mergedDisabledDates = updatedDisabledDates.flat();
    setDisabledDates(mergedDisabledDates);
    //console.log("hehe disabledate",mergedDisabledDates);
    
   
  }
  }, [fetchDates]);
  	
 //check if the disabledate in daterange

 const isDisableDateInRange = (datesBetween, disabledDates) => {
  //console.log("aiya disabel date ",disabledDates)
  //console.log("aiya date between the range",datesBetween)
  for (const disabledDate of disabledDates) {
    const formattedDisableDate = new Date(disabledDate);
    if (formattedDisableDate >= new Date(datesBetween[0]) && formattedDisableDate <= new Date(datesBetween[datesBetween.length - 1])) {
      // Disable date found in range
      return {
        isValid: false,
        reason: 'The selected dates overlap with disabled dates.',
      };
    }
  }
  // No disable date found in range
  return { isValid: true };
 };
 
 
 
  //check disable dates in format M/d/yyyy , then show on it on date picker
  const isDateDisabled = (date) => {
          const options = { timeZone };
	  const isDisabled = disabledDates.includes(date.toLocaleDateString(undefined, options));	 
          return isDisabled;
  };
  
//////////////////////////////////////////////////////////////////////////////////////////////////////  
  
  
  const handleStartDateChange = (date) => {
     setCheckIn(date);
     const newEndDate = new Date(date);
    
     setMinDate(newEndDate);
 
     console.log("this is checkIn",checkIn);
    
     
     };

  const handleEndDateChange = (date) => {
     if(checkIn){
     setMinDate(checkIn);
     }
     setCheckOut(date);
     
   };
   
 

//////////////////////////////////////////////////////////////
  const isDateInRange = ({ date }) => {
	  if (!checkIn) {
	    return '';
	  }
	 /* if (!checkOut) {
	   const initialCheckOut = new Date(checkIn);
	   initialCheckOut.setDate(checkIn.getDate() + 1);
	   
	   const isInitialRange = date >= checkIn && date <= initialCheckOut;
	   return isInitialRange  ? 'highlighted-range' : '';
	  }*/
	  const isNewRange = date >= checkIn && date <= checkOut;
	  return isNewRange  ? 'highlighted-range' : '';
	
  };
 
//////////////////////////////////////////////////////////////////  
  
  
  ////getselected date
  function getDatesBetween(startDate, endDate) {
	  const datesArray = [];
	  let currentDate = new Date(startDate);
	  while (currentDate <= endDate) {
	    const formattedEachDate = currentDate.toISOString().split('T')[0];
	    //console.log("formattedEachDate", formattedEachDate);
	    datesArray.push(formattedEachDate);
	    currentDate.setDate(currentDate.getDate() + 1);
      }
	  return datesArray;
	}
  
   useEffect(() => {
    const datesBetween = getDatesBetween(checkIn, checkOut);
    //console.log("hehe datebtween",datesBetween);
    const justFortoday = new Date();
    if (checkIn>checkOut || datesBetween === null || datesBetween.length === 0) {
	  const formattedDate = format( justFortoday, 'yyyy-MM-dd');
	  const matchedSeason = fetchPricesAndFee.find((season) => {
	      //console.log("price and fee start date",season.start)//2023-10-28
	    return formattedDate >= season.start && formattedDate <= season.end;
	  });

	  if (matchedSeason) {
	    setSinglePrice(matchedSeason.price);
	    setFee(0);
	    setDeposite(0);
	    setTotalPrice(0); 
	   // Set total cost to 0 for a single date
	    return;
	  }
    }
    const calculateTotalCost = (datesBetween, fetchPricesAndFee) => {
      let totalCost = 0;
      let cleaningFee=0;
      let currentDepositeFee=0;
      if (datesBetween.length === 1) {
         const matchedSeason = fetchPricesAndFee.find((season) => {
            return datesBetween[0] >= season.start && datesBetween[0] <= season.end;
         });
         if (matchedSeason) {
        //console.log("Date:", datesBetween[0], "Season price:", matchedSeason.price);
           setSinglePrice(matchedSeason.price);
            setFee(0);
            setDeposite(0);
           setTotalPrice(0); // Set total cost to 0 for single date
           return;
         }
      }

    const datesWithoutLastDay = datesBetween.slice(0, -1);

    datesWithoutLastDay.forEach((date) => {
      const matchingSeason = fetchPricesAndFee.find((season) => {
        return date >= season.start && date <= season.end;
      });

      if (matchingSeason) {
        //console.log("Date:", date, "Season price:", matchingSeason.price);
        totalCost += parseFloat(matchingSeason.price);
        cleaningFee=parseFloat(matchingSeason.fee);
        currentDepositeFee=parseFloat(matchingSeason.deposite);
      }
    });

    setTotalPrice(totalCost);
    setFee(cleaningFee);
    setDeposite(currentDepositeFee);
    //console.log("fee is:",cleaningFee);
    setSinglePrice(Math.floor(totalCost / datesWithoutLastDay.length));
    //console.log("Total Cost:", totalCost);
    setDTotalWithEverthing(cleaningFee+totalCost+currentDepositeFee);
    //console.log("total with everything",cleaningFee+totalCost+currentDepositeFee);
  };

  calculateTotalCost(datesBetween, fetchPricesAndFee);
}, [getDatesBetween, fetchPricesAndFee]);
  
//////////////////////////////////////////////////////////////////////////// 
 
 
 
  //form submit
  
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const datesBetween = getDatesBetween(checkIn, checkOut);
    const dateCheckResult = isDisableDateInRange(datesBetween, disabledDates);
     if (!dateCheckResult.isValid) {
        setOverlapMessage(true);
       return;
    }
     if (!(numberOfNights >= 5 && numOfGuests >= 1 && fullName && email && phoneNum)) {
        setFormFillMessage(true); // Set state to show the message
       return;
    }
  
    const formData = {
      "fields": {
      "Start Date": checkIn.toISOString().split('T')[0],
      "End Date": checkOut.toISOString().split('T')[0],
      "Number Of Guests": parseInt(numOfGuests),
      "Number Of Kids": parseInt(kidsOfGuests),
      "Number Of Babys": parseInt(infantsNum),
      "Full Name": fullName,
      "Email": email,
      "Phone Number": phoneNum,
      "CleaningFee":fee,
      "Deposite":deposite,
      "TotalJustForHotelPrice":totalPrice,
      "TotalWithEverthing":totalWithEverthing,
    }
   }
   
    fetch(`https://api.airtable.com/v0/appPrmFJzdWiFnCpN/ReservationInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer patjcE0Oa54kfWtFE.820c3b5107a690a0160fa2730a0d1a7354c09bdecad6625f180f671b19e2c4e2',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //alert('Booking form submitted successfully!');
         if(numOfGuests && fullName && phoneNum&& email &&numberOfNights >= 5 ){
         setShowBookingSuccessPopup(true);
         }
      })
      .catch(error => {
        alert('Error submitting the booking form. Please try again.');
      });
    };
  

  
 const [numberOfMonths, setNumberOfMonths] = useState(3); // 
  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 1800) {
	  setNumberOfMonths(3);
	} else if (windowWidth <= 1800 && windowWidth > 900) {
	  setNumberOfMonths(2);
	} else {
	  setNumberOfMonths(1);
	}
    };

    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

 
  
  return (
  
  <div  id="Booking" className="bookingSection text-lg">
  <div className="bookingContent">
    <div className="leftPart"> 
      <InfoSection />
      <div className="custom-date-range-picker">
       
        
      </div>
      
      <div className=" text-lg notes"><strong >{t('notes')}</strong>
        <p className=" text-sm">*{t('line1notes')}</p>
        <p className=" text-sm">* {t('line2notes')}  <span>
        <Link to="/houseRoles">
        <button  onClick={()=>{setShowHouseRoles(!showHouseRoles)}}><strong>{t('clickhere')}</strong></button>
        </Link>
        </span> {t('line3notes')} </p>	
        <p className=" text-sm">* {t('line4notes')} </p>
       
        <CheckInAndOutForHouseRole />
      </div>
       
	
</div>
    < div className="rightPart">
    <form onSubmit={handleBookingSubmit}  className="form">
     <div className="formWidth">
      <div className="rightPart--title">€{singlePrice} <span> {t('night')}</span></div>
      <div style={{width:"100%"}}>
        <div className="rightPart--dateChooseBox" >
           <div  
           className="rightandleft--checkInBox">
            <p>{t('checkin')}:</p>
             <DatePicker 
                       
                        onChange={handleStartDateChange} 
                        value={checkIn}  
                        minDate={new Date()}
                        className="custom-date-picker widthofInut"  
                        clearIcon={null}
                        tileClassName={isDateInRange}
                        tileDisabled={({ date }) => isDateDisabled(date)}
                        locale="nl" 
                      

              />
          </div>
          <div  
          className="rightandleft--checkInBox">
            <p>{t('checkout')}:</p>
            <DatePicker 
            key={minDate && minDate.getTime()}
            onChange={handleEndDateChange} 
            value={checkOut} 
            className="custom-date-picker widthofInut"    
            tileClassName={isDateInRange}
            locale="nl" 
            minDate={minDate || new Date()} 
            clearIcon={null}
            tileDisabled={({ date }) => isDateDisabled(date)}
        
	   
           />
          </div>
         </div>
       <div className="rightPart--formPadding">
 
  
      <div className="form-style text-sm">
      <label htmlFor="numOfGuests">
       {t('adult')}:
        <input
          type="number"
          value={numOfGuests}
          id="Number of guests"
          name="Number of guests"
          onChange={(e) => setNumOfGuests(e.target.value)}
          min="1"
          required
          autoComplete="off"
        />
       </label>
      { numberOfNights>=1 &&(
        <div>
        <label  htmlFor="kidsOfGuests">
         {t('childrenage')}:
          <input
            type="number"
            value={kidsOfGuests}
            id="Number of kids"
            min="0"
            name="Number of children"
            onChange={(e) => setKidsOfGuests(e.target.value)}
             autoComplete="off"
          />
        </label>
         <label htmlFor="infantsNum">
         {t('babiesage')}:
          <input
            type="number"
            value={infantsNum}
            id="Number of infants"
            min="0"
            name="Number of infants"
            onChange={(e) => setInfantsNum(e.target.value)}
            autoComplete="off"
          />
        </label>
  
        <label htmlFor="fullName">
          {t('fullname')}:
          <input
            type="text"
            value={fullName}
            id="fullName"
            name="Full name"
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="off"
          />
        </label>
     
        <label htmlFor="email">
         {t('email')}:
          <input
            type="email"
            name="Email"
            id="bookingEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </label>
     
        <label htmlFor="phoneNum">
          {t('phoneNum')}:
          <input
            type="text"
            id="BookingPhone"
            name="Phone number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            required
            autoComplete="off"
          />
        </label>
        </div>
        )}
      </div>

   </div>
  
     
       <button className="contactButton btn btn-primary " type="submit" >
            {t('reserve')}
        </button>
        
      { checkIn && checkOut && checkIn!==checkOut &&(
            <div className="forSummary">
            <p>{t('wontbecharged')}</p>
            <div className="summary--section">
              <span> €{singlePrice} x {numberOfNights} {t("nights")}</span>
              <span>€{(Number(singlePrice) * Number(numberOfNights)).toFixed(2)}</span>
            </div>
            { numberOfNights > 0 &&(
            <div>
              <div className="summary--section">
                <span>{t('deposit')}</span>
                <span>€{deposite.toFixed(2)}</span>
              </div>
              <div className="summary--section">
                <span>{t('cleaningfee')}</span>
                <span>€{fee.toFixed(2)}</span>
              </div>
             </div>
            )}
            <div className="summary--section totalPrice">
              <span>{t('total')} </span>
               { numberOfNights > 0 ?
              <span>€{(totalPrice+fee+deposite).toFixed(2)}
</span>:<span>€0</span>}
            </div>
          </div>
   )}
  </div>
  </div>
  
     </form>
    </div>
 { showBookingSuccessPopup&&(
        <SuccessPopup onClose={() => setShowBookingSuccessPopup(false)}
          numOfGuests={numOfGuests}
          kidsOfGuests={kidsOfGuests}
          fullName={fullName}
          infantsNum={infantsNum} 
          phoneNum={phoneNum}
          email={email}
          checkIn={checkIn} 
          checkOut={checkOut}
          totalPrice ={totalPrice}
          fee={fee}
          deposite={deposite}/>
      )}
      
      
    {overlapMessage &&(
     <Overlap onClose={() => setOverlapMessage(false)}/>
    
    )}
    
    {formFillMessage &&(
     <Completedform onClose={() => setFormFillMessage(false)}/>
    
    )}
    </div>
   
     
  </div>
  );
};

 
export default BookingSection;

         

