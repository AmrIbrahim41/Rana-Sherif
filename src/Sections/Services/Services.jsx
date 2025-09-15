import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.css';
import { faPalette, faCode, faPenRuler, faLightbulb, faMobileAlt, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
  {
    icon: <i className="fa-solid fa-pen-nib fa-xl" style={{color: '#8700b8'}}></i>,
    title: 'Canvas Design',
    description: 'Proficient in Canva for creating professional designs and presentations that effectively communicate ideas.',
  },
  {
    icon: <i className="fa-solid fa-bullhorn fa-xl" style={{color: '#B197FC'}}></i>,
    title: 'GRAPHICS',
    description: 'Skilled in using digital tools to produce clear and engaging visual content for academic and professional projects.',
  },
  {
    icon: <i className="fa-solid fa-file-powerpoint fa-xl" style={{color: '#ff9500'}}></i>,
    title: 'powerpoint',
    description: 'ICDL certified with strong ability to design and deliver impactful presentations tailored to different audiences.',
  },
  {
    icon: <i className="fa-regular fa-file-excel fa-xl" style={{color: '#009419'}}></i>,
    title: 'Excel',
    description: 'Experienced in data entry, analysis, and reporting using Microsoft Excel as part of ICDL training and practical applications.',
  },
  {
    icon: <i className="fa-solid fa-file-word fa-xl" style={{color: '#005fa8'}}></i>,
    title: 'WordPress',
    description: 'Familiar with online content creation and digital platforms, with the ability to adapt quickly to new tools and technologies.',
  },
  {
    icon: <i className="fa-solid fa-comments fa-xl" style={{color: '#74C0FC'}}></i>,
    title: 'communication-skills',
    description: 'Strong communication and teamwork abilities, developed through academic projects and professional training programs at CIB and Rashid Petroleum.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>My Services</h2>
        <p>
          A showcase of my technical and professional skills, demonstrating my ability to deliver high-quality work and innovative solutions.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
