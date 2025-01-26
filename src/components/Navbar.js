import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Chitturi Sowmya</div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/About.js" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} className="nav-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/Projects.js" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/Contact.js" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;