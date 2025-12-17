import { createRoot } from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Car from './pages/Car';
import Form from './pages/Form';



function App() {
  
  //  let carinfo = {brand:"Toyopta", year:2003, price:"1000$"}
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/cars">Car</Link> |{" "}
        <Link to="/form">Form</Link>

      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Car brand = "Marchedies" year="2000" color="Black" price="54879456$"  />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);