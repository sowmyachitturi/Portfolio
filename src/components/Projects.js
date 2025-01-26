import React from 'react';
import './Projects.css';
import BackgroundImage from '../Photos/E-Giftedly.png';
import Kanban from '../Photos/Kanban.png';
import Stock from '../Photos/Stock.png';
import Low from '../Photos/LowLight.png';
import Sentiment from '../Photos/Sentiment.png';
import port from '../Photos/Portfolio.png';


const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'This project is a responsive portfolio website showcasing skills, projects, and achievements, designed to leave a lasting impression. Built with React for dynamic content rendering and HTML, CSS, and JavaScript for a visually appealing and interactive user experience, it highlights personal and professional growth effectively.',
      languages: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: port,
      link: 'https://yourportfolio.com',
      github: 'https://github.com/your-username/portfolio-website',
    },
    {
      title: 'E-Giftedly',
      description: 'This project is an E-Giftdly platform that enables users to send and receive personalized digital gifts effortlessly. Built with HTML, CSS, and JavaScript for an interactive frontend, and PHP for secure backend processing, it ensures a seamless gifting experience with features like gift customization, scheduling, and instant delivery.',
      languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      image: BackgroundImage,
      link: 'https://ecommerce-demo.com',
      github: 'https://github.com/sowmyachitturi/E-giftedly.git',
    },
    {
      title: 'Stock Portfolio Tracker',
      description: 'This project is a stock portfolio prediction website that allows users to track, analyze, and predict stock trends based on historical data. Built with a dynamic frontend using HTML, CSS, and JavaScript, and powered by Java for backend logic and data processing, it provides real-time insights and predictive analytics for investors.',
      languages: ['Java', 'HTML', 'CSS','JavaScript'],
      image: Stock,
      link: 'https://taskmanagerapp.com',
      github: 'https://github.com/sowmyachitturi/portifolioTracker.git',
    },
    {
      title: 'Kanban Board',
      description: 'This project implements a dynamic Kanban board for task management, enabling users to create, update, and move tasks across columns. Built with HTML, CSS, and JavaScript, it offers an intuitive drag-and-drop interface for organizing workflows effectively.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      image: Kanban,
      link: 'https://taskmanagerapp.com',
      github: 'https://github.com/sowmyachitturi/Kunban_board.git',
    },
    {
      title: 'Low Light Image Enhancement',
      description: 'This project focuses on enhancing low-light images using Python for advanced image processing algorithms and Flask as the backend framework. The user-friendly interface built with HTML and CSS allows users to upload, enhance, and download improved images effortlessly',
      languages: ['HTML', 'CSS', 'Python'],
      image: Low,
      link: 'https://taskmanagerapp.com',
      github: 'https://github.com/sowmyachitturi/Low_Light_Image.git',
    },
    {
      title: 'Sentiment Analysis on Social Media Webapp',
      description: 'This project is a social media web app that allows users to create profiles, post updates, and interact through likes and comments. Built with HTML, CSS, and JavaScript, it features a responsive design and dynamic content rendering for a seamless user experience.',
      languages: ['Python'],
      image: Sentiment,
      link: 'https://taskmanagerapp.com',
      github: 'https://github.com/sowmyachitturi/NLP.git',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-languages">
                {project.languages.map((language, idx) => (
                  <span className="language-tag" key={idx}>
                    {language}
                  </span>
                ))}
              </div>
              <div className="project-links">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github github-icon"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;