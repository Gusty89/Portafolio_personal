import ReadSection from './ReadSection.jsx';

function Hero({ theme }) { // Mantenemos la prop 'theme' por si necesitas estilos condicionales en el Hero
  const heroText = `Hola, soy Gustavo David Paniagua, analista de sistemas y desarrollador web. Me gradué en la Universidad Nacional de José C. Paz, Buenos Aires, Argentina. Actualmente estoy buscando oportunidades laborales en el área de desarrollo web y análisis funcional. Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes. Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.`;

  return (
    // 1. Añadimos la clase dinámica del tema
    <section id="inicio" className={`hero ${theme}`} aria-labelledby="hero-title">
      
      {/* EL BOTÓN FUE ELIMINADO DE AQUÍ PORQUE YA ESTÁ EN EL NAVBAR */}

      <div className="hero-copy">
        <div className="hero-identity">
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/profile.jpg"
              alt="Gustavo David Paniagua"
            />
          </div>
          <div className="hero-identity-text">
            <p className="hero-name">Hola, soy Gustavo David Paniagua</p>
            <p className="hero-role">Analista de sistemas y desarrollador web</p>
            <div className="hero-social-row">
              {/* Tus links sociales se mantienen igual */}
              <div className="hero-social">
                <a className="social-link social-link--linkedin" href="https://www.linkedin.com/in/gustavo-david-paniagua/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.8h5V24H0V8.8zm7.5 0h4.8v2.1h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8V24h-5V15.6c0-2.1 0-4.8-2.9-4.8-2.9 0-3.3 2.2-3.3 4.6V24H7.5V8.8z" /></svg>
                </a>
                <a className="social-link social-link--github" href="https://github.com/Gusty89" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.6-4.04-1.6-.54-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.82 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.78.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.88-.01 3.28 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a className="social-link social-link--email" href="mailto:paniaguagustavodavid@gmail.com" aria-label="Enviar correo electrónico" data-tooltip="Correo">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.88l-8 4.99-8-4.99V6l8 4.99L20 6v2.88z" /></svg>
                </a>
                <a className="social-link social-link--download" href="/cv.pdf" download aria-label="Descargar CV" data-tooltip="Descargar CV">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v10M8 9l4 4 4-4M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                </a>
              </div>
              <a className="button button-secondary hero-identity-cta" href="#about-box-title" aria-label="Conóceme más">
                Conóceme
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-title-row">
          <h1 id="hero-title">
            Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes.
          </h1>
          <ReadSection
            text={"Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes. Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras."}
            preferTTS={true}
            ariaLabel="Escuchar la introducción"
          />
        </div>
        <p>
          Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.
        </p>
      </div>
      <div className="hero-card">
        <div className="hero-card-content">
          <h2>Stack tecnológico</h2>
          <h3>React, Vite, CSS, Vue.js, Node.js, Express, Typescript, PostgreSQL</h3>
          <p>Aplicaciones web funcionales y modernas, conectadas a bases de datos.</p>
          <ReadSection
            text={`Stack tecnológico. React, Vite, CSS, Vue.js, Node.js, Express, Typescript, PostgreSQL. Aplicaciones web funcionales y modernas, conectadas a bases de datos.`}
            preferTTS={true}
            ariaLabel="Escuchar la tarjeta de información"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;