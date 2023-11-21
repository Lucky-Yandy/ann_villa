import './BookingSection.css';
import React, { useState } from 'react'; 
import { differenceInCalendarDays } from 'date-fns';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(null);
  
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [kidsOfGuests, setKidsOfGuests] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  const [minDate,setMinDate]=useState('');
  
  
  const handleStartDateChange = (date) => {
    setCheckIn(date);
    const newEndDate = new Date(date);
    newEndDate.setDate(date.getDate() + 5);
    setMinDate(newEndDate);	
    setCheckOut(newEndDate);
   
    
  };
  const handleEndDateChange = (date) => {
     setCheckOut(date);
  };
  
 
  const isDateInRange = ({ date }) => {
	  if (!checkIn) {
	    return '';
	  }
	  if (!checkOut) {
	   const initialCheckOut = new Date(checkIn);
	   initialCheckOut.setDate(checkIn.getDate() + 5);
	   
	   const isInitialRange = date >= checkIn && date <= initialCheckOut;
	   return isInitialRange  ? 'highlighted-range' : '';
	  }
	  
	
	  const isNewRange = date >= checkIn && date <= checkOut;
	  return isNewRange  ? 'highlighted-range' : '';
	
  };

  const handleGuestsChange = (e) => {
    setNumOfGuests(e.target.value);
  };
   const handleKidsNum = (e) => {
    setKidsOfGuests(e.target.value);
  };
  const handleNameInput = (e) => {
    setFullName(e.target.value);
  };
  const handlePhoneInput = (e) => {
   setPhoneNum(e.target.value);
  };
  const handleEmailInput = (e) => {
   setEmail(e.target.value);
  };
  
 
  return (
  
  <div id="booking" className="bookingSection">
  <h2 style={{marginBottom: "10px"}}> Booking </h2>
   <div className="leftPart"> 
    

</div>
    <form action="https://formsubmit.co/431a94d9ac5b5f1bddbfb9e3f5070f0b" method="POST" className="rightPart">
   
      <div className="rightPart--title">$ 285 per night</div>
      <div style={{width:"100%"}}>
        <div className="rightPart--dateChooseBox">
          
          <div className="rightPart--checkInBox">
            <label>Check in:</label>
             <DatePicker 
                       onChange={handleStartDateChange} 
                        value={checkIn}  
                        minDate={new Date()}
                        className="custom-date-picker"
                        tileClassName={isDateInRange}
                        clearIcon={null}

              />
          </div>
          <div className="rightPart--checkOutBox">
            <label>Check out:</label>
            <DatePicker onChange={handleEndDateChange} 
            value={checkOut}   
            tileClassName={isDateInRange}
            minDate={minDate} 
            clearIcon={null}
           />
          
          </div>
         </div>
       <div className="rightPart--formPadding">
        <div className="form-style">
          <label>Number of guests:</label>
           <input type="number"
	        value={numOfGuests}
	        name="Number of guests"
	       
	        onChange={handleGuestsChange}
	        min="1" 
	        required/>
        </div>
         { checkIn && checkOut &&(
         <div>
         <div className="form-style">
           
	   <label>Number of kids:</label>
	   <input type="number"
	         value={kidsOfGuests}
	         name="Number of children"
	         onChange={handleKidsNum}
	         required/>
	 </div>
	 <div className="form-style">
	   <label>Your full name:</label>
	   <input type="text"
	         value={fullName}
	         name="Full name"
	         onChange={handleNameInput} 
	         required/>
	 </div>
	 
	 <div className="form-style">
	   <label>Your email:</label>
	   <input type="email"
	         name="Email"
	         value={email}
	         onChange={handleEmailInput}
	         required/>
	 </div>
	 
	 <div className="form-style">
	   <label>Your phone number:</label>
	   <input type="text"
	         name="Phone number"
	         value={phoneNum}
	         onChange={handlePhoneInput}
	         required/>
	 </div>
	 
	</div>
         )}
      </div>
     
      <button className="bookingbutton" type="submit">Reserve</button>
      { checkIn && checkOut &&(
         <div className="forSummary">
            <p>You won't be charged yet</p>
            <div className="summary--section">
              <span> $285 x {numberOfNights} nights</span>
              <span>${285*numberOfNights}</span>
             
            </div>
            { numberOfNights > 0 &&(
            <div className="summary--section">
              <span>Cleaning fee</span>
              <span>$69</span>
            </div>
            )}
            <div className="summary--section totalPrice">
              <span>Total before taxes</span>
               { numberOfNights > 0 ?
              <span>{285*numberOfNights + 69}</span>:<span>{285*numberOfNights}</span>}
            </div>
          </div>
   )}
  </div>
    </form>
  </div>
  );
};

 
export default BookingSection;
/* <iframe className="airtable-embed"
   title="Airtable Embed" 
   src="https://airtable.com/embed/appPrmFJzdWiFnCpN/shrj3wf2askVJUh4E?backgroundColor=yellow&viewControls=on" 
   frameBorder="0" 
    width="100%" 
    height="100%" 
   style={{ background: "transparent", border: "1px solid #ccc",maxWidth: "100%",}}>
   </iframe>*/

         

