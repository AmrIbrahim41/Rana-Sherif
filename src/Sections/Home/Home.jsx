import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Links from '../../Data/Links/links.jsx';

const Home = () => {
    const userName = "Rana Sherif";

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Links.CV;
        link.download = `${userName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-section" id="home">
            {/* --- الجزء الأيسر: النصوص والأزرار --- */}
            <div className="home-text">
                <h2>Hi, I&apos;m</h2>
                <h1 className="name-gradient">{userName}</h1>
                <h3>Business Information Systems Student</h3>
                <p>
                    I’m Rana Sherif, a third-year student at Sadat Academy for Management Sciences (SAMS),
                    majoring in Business Information Systems (BIS). I’m passionate about combining technology and business to
                    create innovative solutions that enhance organizational performance and efficiency.
                </p>
                <div className="home-buttons">
                    <a href={Links.email_url} className="btn btn-primary">Hire Me</a>
                    <button onClick={handleDownload} className="btn btn-secondary">
                        <FontAwesomeIcon icon={faDownload} /> Download CV
                    </button>
                </div>
                <div className="home-socials">
                    <a href={Links.facebook} target='_blank' rel="noopener noreferrer" className="facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href={Links.instagram} target='_blank' rel="noopener noreferrer" className="instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href={Links.linkedin} target='_blank' rel="noopener noreferrer" className="linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href={Links.whatsapp} target='_blank' rel="noopener noreferrer" className="whatsapp" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href={Links.messenger} target='_blank' rel="noopener noreferrer" className="messenger" aria-label="Messenger"><FontAwesomeIcon icon={faFacebookMessenger} /></a>

                </div>

            </div>

            {/* --- الجزء الأيمن: الصورة --- */}
            <div className="home-image">
                <div className="image-background">
                    <img src="./UserImg.png" alt="Rana Sherif" />
                </div>
            </div>
        </div>
    );
}

export default Home;

