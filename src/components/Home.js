import React from 'react';
import './Home.css';
import Resume from './Resume.pdf';
const Home = () => {
  return (
    <>
      <section className="home-section" id="home">
        <div className="home-container">
          <div className="text-content">
            <h3>Hello, It's Me</h3>
            <h1>Chitturi Sowmya</h1>
            <h2>
              And I'm a <span className="highlight">Frontend Developer</span>
            </h2>
            <p>
            I am a quick learner, self-motivated, and possess a positive attitude, dedicated to delivering high-quality solutions for modern web design and development.
            </p>
            <div className="social-links">
              <a href="https://github.com/sowmyachitturi" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/chitturi-sowmya-5a257224b/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <a href={Resume} className="home-btn" download>
              Download CV
            </a>
          </div>
          <div className="image-content">
            <div className="profile-picture"></div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Home;
