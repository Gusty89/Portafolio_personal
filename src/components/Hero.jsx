import ReadSection from './ReadSection.jsx';

function Hero({ theme }) { // Mantenemos la prop 'theme' por si necesitas estilos condicionales en el Hero
  const heroText = `Hola, soy Gustavo David Paniagua, analista de sistemas y desarrollador web.
                    Puedes contactarme por, linkedin, github, correo electrónico, whatsapp o descargar mi CV.
                    `;

  return (
    // 1. Añadimos la clase dinámica del tema
    <section id="inicio" className={`hero ${theme}`} aria-labelledby="hero-title">
      

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
            
            {/* NUEVO CONTENEDOR PARA ALINEAR ICONOS Y AUDIO */}
            <div className="hero-actions-container">
              <div className="hero-social">
                {/* Tus enlaces sociales */}
                <a className="social-link social-link--linkedin" href="https://www.linkedin.com/in/gustavo-david-paniagua/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.8h5V24H0V8.8zm7.5 0h4.8v2.1h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8V24h-5V15.6c0-2.1 0-4.8-2.9-4.8-2.9 0-3.3 2.2-3.3 4.6V24H7.5V8.8z" /></svg>
                </a>
                <a className="social-link social-link--github" href="https://github.com/Gusty89" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58 0-.28-.01-1.03-.02-2.03-3.34.73-4.04-1.6-4.04-1.6-.54-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.82 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.78.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.88-.01 3.28 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a className="social-link social-link--email" href="mailto:paniaguagustavodavid@gmail.com" aria-label="Enviar correo electrónico" data-tooltip="Correo">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.88l-8 4.99-8-4.99V6l8 4.99L20 6v2.88z" /></svg>
                </a>
                <a className="social-link social-link--whatsapp" href="https://wa.me/5491167353885" target="_blank" rel="noreferrer" aria-label="WhatsApp" data-tooltip="WhatsApp">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.918-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .032 5.435.032 12.072c0 2.095.545 4.137 1.583 5.932L0 24l6.193-1.626a11.75 11.75 0 005.812 1.564h.005c6.634 0 12.072-5.435 12.072-12.072 0-3.228-1.258-6.264-3.543-8.548z" /></svg>
                </a>
                <a className="social-link social-link--download" href="/cv.pdf" download aria-label="Descargar CV" data-tooltip="Descargar CV">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12 3v10M8 9l4 4 4-4M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                </a>
              </div>

              {/* BOTÓN ALINEADO A LA DERECHA */}
              <div className="hero-audio-btn">
                <ReadSection
                  text={heroText}
                  preferTTS={true}
                  ariaLabel="Escuchar la introducción"
                />
              </div>
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
        <p className="hero-description">
          Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.
        </p>
      </div>
      <div className="hero-card">
        <div className="hero-card-content">
          <h2>Stack tecnológico</h2>
          <div className="tech-stack-icons">
            <div className="tech-icon" data-tooltip="React"><i className="devicon-react-original colored"></i></div>
            <div className="tech-icon" data-tooltip="Vite"><i className="devicon-vitejs-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="CSS3"><i className="devicon-css3-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="Vue.js"><i className="devicon-vuejs-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="Node.js"><i className="devicon-nodejs-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="Express"><i className="devicon-express-original colored"></i></div>
            <div className="tech-icon" data-tooltip="TypeScript"><i className="devicon-typescript-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="PostgreSQL"><i className="devicon-postgresql-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="Docker"><i className="devicon-docker-plain colored"></i></div>
            <div className="tech-icon" data-tooltip="Postman"><i className="devicon-postman-plain colored"></i></div>
          </div>
          <p className="hero-description-stack">Aplicaciones web funcionales y modernas, conectadas a bases de datos.</p>
          <div className = "audio-controls-container">
          <ReadSection 
            text={`Stack tecnológico. React, Vite, CSS, Vue.js, Node.js, Express, Typescript, PostgreSQL, Docker, Postman. 
              Aplicaciones web funcionales y modernas, conectadas a bases de datos.`}
            preferTTS={true}
            ariaLabel="Escuchar la tarjeta de información"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;