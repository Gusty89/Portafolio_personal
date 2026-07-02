import ReadSection from './ReadSection.jsx';

function Hero({ theme, onToggleTheme }) {
  const heroText = `Hola, soy Gustavo David Paniagua, analista de sistemas y desarrollador web. Me gradué en la Universidad Nacional de José C. Paz, Buenos Aires, Argentina. Actualmente estoy buscando oportunidades laborales en el área de desarrollo web y análisis funcional. Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes. Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.`;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <button
        type="button"
        className="button button-secondary theme-toggle"
        onClick={onToggleTheme}
        aria-label="Cambiar entre modo oscuro y modo claro"
      >
        {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      </button>
      <div className="hero-copy">
        <p className="eyebrow">
          Hola, soy Gustavo David Paniagua <br />
          analista de sistemas y desarrollador web.<br />
          Me gradué en la Universidad Nacional de José C. Paz, Buenos Aires, Argentina.<br />
          Actualmente estoy buscando oportunidades laborales en el área de desarrollo web y análisis funcional.
        </p>
        <h1 id="hero-title">
          Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes.
        </h1>
        <p>
          Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/cv.pdf" download aria-label="Descargar CV en PDF">
            Descargar CV
          </a>
          <a className="button button-secondary" href="#proyectos" aria-label="Ir a la sección de proyectos">
            Ver proyectos
          </a>
          <ReadSection text={heroText} ariaLabel="Escuchar la introducción del sitio" />
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card-content">
          <span className="badge">Frontend, Backend & Databases</span>
          <h2>React, Vite, CSS, Node.js, express, MySQL, PostgreSQL</h2>
          <p>Aplicaciones web funcionales y modernas, conectadas a bases de datos.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
