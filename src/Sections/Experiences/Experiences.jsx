import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import './Experiences.css';

const experiencesData = [
  {
    date: 'June-2025 - July 2025',
    title: 'ICDL Certificate',
    company: 'Cairo University',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    date: ' 2 weeks (2024) | 2 weeks (2024)',
    title: 'Summer Internship',
    company: 'Rashid Petroleum Company',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
  {
    date: 'July 2025',
    title: 'Summer Internship',
    company: 'CIB Bank',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
];

const Experiences = () => {
  return (
    <section className="experiences-section" id="experiences">
      <div className="experiences-header">
        <h2>My Experiences</h2>
        <p>
          A summary of my professional background and my experiences in various roles.
        </p>
      </div>
      <div className="experiences-grid">
        {experiencesData.map((experience) => (
          <ExperienceCard
            key={experience.title}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
