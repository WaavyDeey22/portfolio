import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend Development',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      title: 'Tools & Technologies',
      items: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="fade-in">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">Technologies I work with to build amazing things</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>
            <div className="skill-list">
              {skill.items.map((item, idx) => (
                <span className="skill-item" key={idx}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
