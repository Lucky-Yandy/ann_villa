
import './App.css';
import React, {useState}from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar.js";
import Home from "./Pages/Home/HomeScreen";
import Photos from "./Pages/PhotoTour/PhotoTour.js";
import SHowHoseRole from "./Pages/Home/BookingSection/ShowHouseRoles.js";
import i18n from './i18n';
import {Suspense} from 'react';
import LocaleContext from './LocaleContext';

function Loading(){
 return(<>Loading...</>)

}



function App() {
  const[locale, setLocale]=useState(i18n.language);
  
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));


  const handleLanguage =(event)=>{
    console.log('Changing language to:', event.target.value);
    i18n.changeLanguage(event.target.value);//nl or
  }
  

  return (
 <div className="App">
  <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
         <Router>
        <div> 
          <Navbar handleLanguage={handleLanguage} locale={locale} setLocale={setLocale} /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact strict path="/photos" element={<Photos />} />
            <Route exact strict path="/houseRoles" element={<SHowHoseRole />} />
          </Routes> 
       
      </div>
    </Router>
   </Suspense>
  </LocaleContext.Provider>
</div>
  );
}

export default App;
