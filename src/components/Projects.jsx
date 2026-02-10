import React from 'react';

const Projects = () => {
  const projects = [
    {
      emoji: '💝',
      title: 'Valentine Offer',
      description: 'An interactive web application designed to help you pop the question in a fun and engaging way. Ask your partner to be your Valentine with a delightful user experience featuring smooth animations and playful interactions that make the moment special.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: 'https://valentine-offer.netlify.app/',
      githubLink: 'https://github.com/WaavyDeey22'
    },
    {
      emoji: '📊',
      title: 'PipSnap - Fx Calculator',
      description: 'A professional trading calculator built for Forex, commodities, and indices traders. This tool simplifies lot size calculations, helping traders make informed decisions quickly and accurately. Features real-time calculations and an intuitive interface designed specifically for traders.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      demoLink: 'https://pipsnap.netlify.app/',
      githubLink: 'https://github.com/WaavyDeey22'
    }
  ];

  return (
    <section id="projects" className="fade-in">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Some of my recent work</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">{project.emoji}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
