import { useEffect, useState } from 'react';
import './Nav.css';
import links from '../../Data/Links/links';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'experiences', 'projects', 'testimonials'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="fa-solid fa-cat fa-2xl" style={{ color: '#B197FC' }}></i>
        <h2>Rana Sherif</h2>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About Me</a>
        </li>
        <li>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsOpen(false)}>Services</a>
        </li>
        <li>
          <a href="#experiences" className={activeSection === 'experiences' ? 'active' : ''} onClick={() => setIsOpen(false)}>Experiences</a>
        </li>
        <li>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => setIsOpen(false)}>Testimonials</a>
        </li>
        <li>
          <a href={links.phone_url} className="contact-btn-mobile" onClick={() => setIsOpen(false)}>Contact Me</a>
        </li>
      </ul>

      <a href={links.phone_url} className="contact-btn">Contact Me</a>
    </nav>
  );
};

export default Nav;

