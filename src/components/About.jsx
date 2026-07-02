
function About() {
  return (
    <section className="section intro">
      <div>
        <h2>Quién soy</h2>
        <ul className="intro-list">
          <li>
            <span className="intro-icon" role="img" aria-label="laptop">💻</span>
            <span className="intro-text">Analista de Sistemas con formación orientada al Análisis Funcional y al Desarrollo Web.</span>
          </li>
          <li>
            <span className="intro-icon" role="img" aria-label="pin">📌</span>
            <span className="intro-text">Durante mi formación académica adquirí conocimientos en relevamiento y análisis de requerimientos, modelado de procesos, diseño de bases de datos, desarrollo de aplicaciones web y documentación de proyectos, participando en proyectos individuales y colaborativos que fortalecieron mi capacidad para transformar necesidades de negocio en soluciones tecnológicas.</span>
          </li>
          <li>
            <span className="intro-icon" role="img" aria-label="books">📚</span>
            <span className="intro-text">Estoy comprometido con el aprendizaje continuo, la mejora constante y la incorporación de nuevas tecnologías y metodologías de trabajo.</span>
          </li>
          <li>
            <span className="intro-icon" role="img" aria-label="target">🎯</span>
            <span className="intro-text">Busco oportunidades como Analista Funcional, Analista de Sistemas o Desarrollador Web, donde pueda aportar una visión integral entre el negocio y la tecnología, seguir desarrollándome profesionalmente y contribuir al desarrollo de soluciones eficientes, escalables y de calidad.</span>
          </li>
          <li>
            <span className="intro-icon" role="img" aria-label="handshake">🤝</span>
            <span className="intro-text">¡Estoy abierto a nuevos desafíos, oportunidades laborales y a conectar con profesionales del sector IT!</span>
          </li>
        </ul>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Especialidad</h3>
          <p>Apps web, landing pages, automatización de procesos.</p>
        </div>
        <div className="skill-card">
          <h3>Tecnologías</h3>
          <p>React, Vite, CSS, Node.js, Express, MySQL, PostgreSQL y diseño responsive.</p>
        </div>
        <div className="skill-card">
          <h3>Misión</h3>
          <p>Crear proyectos visuales, limpios, funcionales y centrados en la experiencia del usuario.</p>
        </div>
      </div>
    </section>
  );
}

export default About;