import { createRoot } from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);