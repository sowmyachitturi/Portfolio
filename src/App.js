
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
const App = () => {
  return (
    <div className={`App `}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About.js" element={<About />} />
        <Route path="/Projects.js" element={<Projects />} />
        <Route path="/Contact.js" element={<Contact />} />
      </Routes>
    </div>
  );
};

const Wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default Wrapper;
