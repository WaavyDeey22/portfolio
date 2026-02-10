import React from 'react';

const About = () => {
  return (
    <section id="about" className="fade-in">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Passionate about creating innovative digital solutions</p>
      <div className="about-content">
        <p>
          I'm Abdulrahman Yusuf, a frontend web developer and software engineering student at APTECH 
          with a passion for creating secure, scalable, and user-friendly applications. I combine my 
          academic knowledge with practical development experience to build exceptional digital experiences.
        </p>
        <p>
          My journey in technology spans across frontend development, where I believe in writing clean, 
          maintainable code and crafting user-friendly applications that make a difference. I'm constantly 
          learning and evolving, staying up-to-date with the latest technologies and best practices in 
          web development.
        </p>
        <div className="about-tags">
          <span className="tag">Problem Solver</span>
          <span className="tag">Team Player</span>
          <span className="tag">Continuous Learner</span>
          <span className="tag">Frontend Developer</span>
        </div>
      </div>
    </section>
  );
};

export default About;
