import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1 >Welcome to My Portfolio</h1>
        <p>Frontend Developer | UI/UX Designer</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </header>
  );
};

export default Header;
