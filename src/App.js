import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Tummy/Home/Home.jsx';
import Mom from './Tummy/Mom-Mom/Mom-mom.jsx';
import Pregnancytests from './Tummy/PregnancyMap/Your Esential Tests.jsx';
import AskAmma from './Tummy/Ask-Amma/Ask-Amma.jsx';
import WhatYourMom from './Tummy/What-Your-Momy/What-your-mom.jsx';


import './App.css';

function App() {
  return (
   
    <Router>
      <Routes>
            <Route path="/" element={<Home />} /> 
            
            <Route path="/mom" element={<Mom />} /> 
               
            <Route path="/Pregnancy tests" element={<Pregnancytests />} /> 
            <Route path="/Ask-amma" element={<AskAmma />} /> 
            <Route path="/what-your-mom" element={<WhatYourMom />} /> 
          </Routes>
      
   
    </Router>
  );
}

export default App;
