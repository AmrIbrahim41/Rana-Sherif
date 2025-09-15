import './ExperienceCard.css';

const ExperienceCard = ({ date, title, company, description }) => {
  return (
    <div className="experience-card">
      <p className="experience-date">{date}</p>
      <h3 className="experience-title">{title}</h3>
      <p className="experience-company">{company}</p>
      <p className="experience-description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
