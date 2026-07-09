import ReadSection from './ReadSection.jsx';

function About({ theme }) { // 1. Recibimos 'theme' como prop
  const readText = `Quien soy y que busco, Soy Gustavo David Paniagua, 
  analista de sistemas y desarrollador web. 
  Me gradué en la Universidad Nacional de José C. Paz, Buenos Aires, Argentina.
  Mi formación académica me permitió desarrollar conocimientos en análisis de requerimientos, bases de datos, 
  desarrollo web y trabajo en equipo mediante proyectos reales.
  Estoy en búsqueda de oportunidades como Analista Funcional, Analista de Sistemas o Desarrollador Web 
  para aportar mis conocimientos y continuar creciendo profesionalmente.
  ¡Estoy abierto a nuevos desafíos, oportunidades laborales y a conectar con profesionales del sector IT!`;
  return (
    // 2. Usamos el tema en la clase si necesitas estilos específicos, 
    // o simplemente para mantener consistencia.
    <section className={`section intro ${theme}`} aria-labelledby="about-box-title">
      <div className="intro-content">
        <article className="project-card">
          <div className="section-header">
            <h2 id="about-box-title">Quién soy / Qué busco</h2>
            <ReadSection
              text={readText}
              preferTTS={true}
              ariaLabel="Escuchar la sección Quién soy y Qué busco"
            />
          </div>

          <div className="about-card-content">
            <p className="about-summary">
              <span role="img" aria-label="saludo">👋</span> 
              Soy Gustavo David Paniagua, analista de sistemas y desarrollador web. Me {' '}
              <a
                className="graduation-link"
                href="https://www.linkedin.com/posts/gustavo-david-paniagua_gratitud-perseverancia-constancia-ugcPost-7476319635714351104-tEIb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADL9fLQBE1PFMffeY60VxZWjARo_VzlmeT4"
                target="_blank"
                rel="noreferrer"
                title="Ir a la publicación de LinkedIn"
                aria-label="Ir a la publicación de LinkedIn"
                data-tooltip="Ir a la publicación de LinkedIn"
              >gradué</a> en la Universidad Nacional de José C. Paz, Buenos Aires, Argentina.
            </p>

            <p className="about-summary">📌Mi formación académica me permitió desarrollar conocimientos en análisis de requerimientos, bases de datos, desarrollo web y trabajo en equipo mediante proyectos reales.</p>

            <p className="about-summary">🎯Estoy en búsqueda de oportunidades como Analista Funcional, Analista de Sistemas o Desarrollador Web para aportar mis conocimientos y continuar creciendo profesionalmente.</p>

            <p className="about-summary">🤝¡Estoy abierto a nuevos desafíos, oportunidades laborales y a conectar con profesionales del sector IT!</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;