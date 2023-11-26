
import './App.css';
import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar.js";
import Home from "./Pages/Home/HomeScreen";
import Photos from "./Pages/PhotoTour/PhotoTour.js";
/*"homepage":"https://lucky-yandy.github.io/ann_villa",

Email:
info@vilaspain.nl
Midaan2021!

Host:
Master-ID: 526648129.swh.strato-hosting.eu
Webspace Pad: /mnt/rid/81/29/526648129/htdocs/


   */
  
function App() {
  return (
    <div className="App">
      <Router basename="/ann_villa/">
       <div> 
       <Navbar />
       
       <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/photos" element={<Photos />}></Route>
       </Routes> 
      </div>  
      </Router>
    </div>
  );
}

export default App;
