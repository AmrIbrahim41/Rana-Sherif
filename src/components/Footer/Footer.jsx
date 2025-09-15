import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Links from '../../Data/Links/links';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fa-solid fa-cat fa-2xl" style={{ color: '#B197FC' }}></i>
          <h2>Rana Sherif</h2>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <div className="footer-socials">
          <a href={Links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href={Links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href={Links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          Back To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
