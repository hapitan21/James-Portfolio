import React, { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaJsSquare, FaGithub,} from 'react-icons/fa'; // Import all necessary icons
import JamessImage from './Jamess.jpg'; // Import your profile image
import { Link } from 'react-scroll'; // Import scroll functionality
import todoImage from './todo.png'; // Import  Todo project image

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      offset: 120, 
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" data-aos="fade-down">
      <div className="image-holder">
        <img src={JamessImage} alt="Josh" />
      </div>
      <h1 className="joshua">James Freian Hapitan </h1>
      <p>Networker | Frond-end Designer | Tech Specialist</p>
      <nav className='nav-links'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        Hello! I'm James Freian Hapitan, second year IT student passionate about technology and its endless possibilities.
        I am currently pursuing my degree at the Western Institute of Technology, where I'm diving deep into 
        the world of information technology.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-container" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skill java" data-aos="zoom-in">
        <p><FaJava /> Java: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '30%' }}></div>
        </div>
      </div>
      <div className="skill html" data-aos="zoom-in">
        <p><FaHtml5 /> HTML: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="skill python" data-aos="zoom-in">
        <p><FaPython /> Python: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '20%' }}></div>
        </div>
      </div>
      <div className="skill css" data-aos="zoom-in">
        <p><FaCss3Alt /> CSS: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="skill javascript" data-aos="zoom-in">
        <p><FaJsSquare /> JavaScript: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level" style={{ width: '10%' }}></div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        
        <div className="project" data-aos="flip-left">
          <h3 className="project-title">Todo App</h3>
          <img src={todoImage} alt="Todo App Screenshot" className="project-image" />
          <p className="project-description">A Todo App Made using React and MONGODB</p>
          <a href="https://github.com/hapitan21/hapiterns.git" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>Email: jamesfreian70@gmail.com</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-offset='0'>
      <p>© 2024 James Freian Hapitan</p>
      <div className="social-links">
        <a href="https://github.com/hapitan21" target="_blank" rel="noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default App;
