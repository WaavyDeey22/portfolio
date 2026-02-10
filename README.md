# Abdulrahman Yusuf - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, particle effects, and a sleek cyberpunk-inspired design.

## Features

- ✨ Modern and responsive design
- 🎨 Cyberpunk-inspired color scheme with gradient effects
- 🎯 Smooth scroll animations
- 💫 Interactive particle background
- 🖱️ Custom cursor
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Component-based architecture

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Particles.js** - Interactive particle background
- **CSS3** - Styling with animations and transitions
- **JavaScript (ES6+)** - Modern JavaScript features

## Project Structure

```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Particles.jsx
│   │   └── Loader.jsx
│   ├── hooks/
│   │   └── useEffects.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Components

### Navbar
Navigation bar with smooth scroll links to different sections.

### Hero
Landing section with animated text and avatar.

### About
Personal introduction and tags showcasing key attributes.

### Skills
Grid display of technical skills and tools.

### Projects
Showcase of featured projects with live demo and GitHub links.

### Experience
Education and work experience timeline.

### Certificates
Section for professional certificates (coming soon).

### Contact
Contact form and information with social media links.

### Particles
Background particle animation effect.

### Loader
Initial loading screen with animated logo.

## Custom Hooks

- **useCustomCursor** - Implements custom cursor animation
- **useSmoothScroll** - Enables smooth scrolling to sections
- **useScrollAnimations** - Triggers fade-in animations on scroll
- **useBackToTop** - Controls back-to-top button visibility

## Customization

### Colors
Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary: #00ff88;
  --secondary: #0099ff;
  --accent: #ff0066;
  --dark: #0a0e27;
  --darker: #050816;
  --light: #ffffff;
  --gray: #64748b;
}
```

### Content
Update the content in the respective component files in `src/components/`.

### Fonts
The project uses Google Fonts (Orbitron and Raleway). You can change these in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: waavydeey1114@gmail.com
- GitHub: [WaavyDeey22](https://github.com/WaavyDeey22)
- Twitter/X: [@__aaizen](https://x.com/__aaizen?s=21)

---

Built with ❤️ by Abdulrahman Yusuf