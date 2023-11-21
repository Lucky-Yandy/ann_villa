import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
//import 'react-calendar/dist/Calendar.css';
function BookingCalendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const bookedDates = [];
  const autoBookedDates = [];
	for (let i = 0; i < 6; i++) {
	  const startDate = new Date();
	  startDate.setDate(startDate.getDate() + i);
	  bookedDates.push(startDate);
}

    console.log(bookedDates);
  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) => date.toDateString() ===                bookedDate.toDateString());
  };

  const isDateDisabled = (date) => {
    // Disable dates that are booked or within the 5-day minimum booking period
    return isDateBooked(date) || (startDate && endDate && date >= startDate && date <= endDate);
  };

  const handleDateChange = (date) => {
    if (!startDate || (startDate && endDate)) {
      // Set start date if no start date or both start and end dates are selected
      setStartDate(date);
      setEndDate(null);
    } else {
      // Set end date if start date is already selected
      setEndDate(date);
    }
  };

  return (
    <div>
     
      <div className="calendar-container">
        <DatePicker
          onChange={handleDateChange}
          value={startDate}
          minDate={new Date()} 
          maxDate={new Date('2023-12-31')} 
          calendarClassName="booking-calendar"
          tileDisabled={({ date, view }) => view === 'month' && isDateDisabled(date)}
        />
      </div>
     
    </div>
  );
}

export default BookingCalendar;

