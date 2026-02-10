import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="fade-in">
      <h2 className="section-title">Experience & Education</h2>
      <p className="section-subtitle">My journey of continuous learning</p>
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Software Engineering</h3>
              <p className="institution">APTECH</p>
            </div>
            <span className="duration">2024 - 2026</span>
          </div>
          <p className="experience-description">
            Pursuing Advanced Diploma in Software Engineering (ADSE) where I gained a solid foundation 
            in frontend development and practical hands-on experience. Collaborated with senior developers 
            on various web applications and learned industry best practices for building modern, responsive websites.
          </p>
          <div className="skills-gained">
            <h4>Skills Gained:</h4>
            <div className="skill-list">
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Responsive Design</span>
              <span className="skill-item">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
