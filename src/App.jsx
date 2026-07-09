import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (systemPrefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Navegación del sitio">
          <a href="#inicio">Inicio</a>
          <a href="#about-box-title">Quién soy</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#certifications-title">Certificaciones</a>
          <a href="#contact-title">Contacto</a>
        </nav>
      </header>
      <Hero theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;