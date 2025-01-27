import React from 'react';
import './About.css';
import inter from '../Photos/Inter.png'
import school from '../Photos/SriChaitanya.jpeg'
import university from '../Photos/VIT.png'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="main-heading">About Me</h2>
        <div className="education-container">
        <p className="about-me-text">
        Hello! I am Sowmya Chitturi, and I am a passionate Software Developer with experience in building scalable applications. Currently pursuing a Bachelor's degree in Computer Science and Engineering at VIT-AP University (2021-2025), I have honed my skills in Java, Python, HTML, and CSS.
I have successfully completed internships as a Software Development Engineer, gaining hands-on experience in building robust systems. My project work includes sentiment analysis, low-light image enhancement, and the development of the EGiftedly website, among others. My interests lie in exploring emerging technologies, enhancing problem-solving abilities through LeetCode challenges, and continually expanding my technical skill set.
In addition to my technical expertise, I possess strong leadership qualities and a positive attitude.
        </p>

        <h2 className="section-heading">Education</h2>
          <div className="education-item">
            <img src={university} alt="VIT-AP University" className="education-image" />
            <div className="education-content">
              <h3>Bachelor's in Technology (BTech)</h3>
              <p>VIT-AP University, Computer Science and Engineering, 2021-2025</p>
              <p><strong>CGPA :</strong> 8.88</p>
            </div>
          </div>

          <div className="education-item alternate">
            <div className="education-content">
              <h3>Intermediate</h3>
              <p>Aakash, Science Stream, 2019-2021</p>
              <p><strong>Percentage :</strong> 91%</p>
            </div>
            <img src={inter} alt="Aakash" className="education-image" />
          </div>

          <div className="education-item">
            <img src={school} alt="Sri Chaitanya - Gosala" className="education-image" />
            <div className="education-content">
              <h3>School</h3>
              <p>Sri Chaitanya High School - Gosala, 2018 - 2019</p>
              <p><strong>GPA :</strong> 9.8</p>
            </div>
          </div>

        </div>


        <h2 className="section-heading">Skills</h2>
        <div className="skills-container">
          {[
            { icon: 'fab fa-java', name: 'Java', level: 80, color: '#f89820' },
            { icon: 'fab fa-python', name: 'Python', level: 50, color: '#3776ab' },
            { icon: 'fab fa-html5', name: 'HTML', level: 90, color: '#e44d26' },
            { icon: 'fab fa-css3-alt', name: 'CSS', level: 70, color: '#264de4' },
            { icon: 'fab fa-js-square', name: 'JavaScript', level: 60, color: '#f7df1e' },
            { icon: 'fab fa-react', name: 'React', level: 70, color: '#61dafb' }
            
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
              <p className="skill-percentage">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;