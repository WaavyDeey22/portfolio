import React from 'react';

const Hero = () => {
  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert('CV download will be available soon!');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hello, I'm</h2>
          <h1>Abdulrahman Yusuf</h1>
          <p className="tagline">Frontend Developer | Crafting Digital Experiences</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            <a href="#" className="btn btn-secondary" onClick={handleDownloadCV}>Download CV</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <div className="avatar-bg"></div>
            <div className="avatar">AY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
