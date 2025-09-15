import './About.css';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-image">
                <img src="./UserImg_2.png" alt="Rana Sherif" />
            </div>
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    A 20-year-old third-year student at Sadat Academy for Management Sciences (SAMS),
                     majoring in Business Information Systems (BIS). I am passionate about bridging the gap 
                     between technology and business by leveraging modern tools and systems to deliver efficient
                      and innovative solutions.
                </p>
                
                <div className="skills-container">
                    {skillsData.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-level" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const skillsData = [
    { name: 'Excel', percentage: 92 },
    { name: 'Word', percentage: 95 },
    { name: 'PowerPoint', percentage: 88 },
    { name: 'Canva', percentage: 90 }
];

export default About;