import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`app-shell ${theme}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Hero theme={theme} onToggleTheme={toggleTheme} />} />
          <Route path="/sobre-mi" element={<About theme={theme} />} />
          <Route path="/proyectos" element={<Projects theme={theme} />} />
          <Route path="/certificaciones" element={<Certifications theme={theme} />} />
          <Route path="/contacto" element={<Contact theme={theme} />} />
        </Routes>
      </main>
      <Footer theme={theme} />
    </div>
  );
}
export default App;