
import './App.css';
import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar.js";
import Home from "./Pages/Home/HomeScreen";
import Photos from "./Pages/PhotoTour/PhotoTour.js";
/* */
  
function App() {
  return (
    <div className="App">
      <Router>
       <div> 
       <Navbar />
       <Routes>
        <Route path="/" element={<Home />}></Route> 
       <Route path="/photos" element={<Photos />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>
       </Routes> 
      </div>
      
     
      </Router>
    </div>
  );
}

export default App;
