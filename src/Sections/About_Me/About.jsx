import './About.css'; // <-- متنساش تستدعي ملف الـ CSS
import userimg_2 from'/UserImg.png'

// بيانات المهارات عشان نعرضها بشكل منظم
const skillsData = [
    { name: 'Excel', percentage: 92 },
    { name: 'Word', percentage: 95 },
    { name: 'PowerPoint', percentage: 88 },
    { name: 'Canva', percentage: 90 }
];

const About = () => {
    return (
        // قسم رئيسي بيحتوي كل العناصر
        <div className="about-section" id="about">

            {/* --- الجزء الأيسر: الصورة --- */}
            <div className="about-image">
                {/* هنحط الصورة هنا. الـ div اللي حواليها عشان نضيف خلفية الفرشاة الزرقاء */}
                <img src={userimg_2} alt="Rana Sherif" />
            </div>

            {/* --- الجزء الأيمن: النصوص والمهارات --- */}
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    A 20-year-old third-year student at Sadat Academy for Management Sciences (SAMS),
                     majoring in Business Information Systems (BIS). I am passionate about bridging the gap 
                     between technology and business by leveraging modern tools and systems to deliver efficient
                      and innovative solutions.
                </p>
                
                {/* قسم المهارات */}
                <div className="skills-container">
                    {/* هنستخدم map عشان نعرض كل مهارة مع شريط التقدم بتاعها */}
                    {skillsData.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                            <div className="skill-info">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="progress-bar">
                                {/* عرض نسبة التقدم هيتم بالـ inline style بناءً على النسبة المئوية */}
                                <div className="progress-level" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default About;