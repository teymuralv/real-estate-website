import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";

import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import HomePage from './Pages/Home/HomePage';
import PropertiesPage from './Pages/Properties/PropertiesPage';
import ServicesPage from './Pages/Services/ServicesPage';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  )
}
export default App