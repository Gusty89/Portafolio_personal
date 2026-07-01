
function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Hola, soy Gustavo David Paniagua <br/> 
        analista de sistemas y desarrollador web.<br/>
        Me gradué en la Universidad Nacional de José. C. Paz, Buenos Aires, Argentina.<br/> 
        Actualmente estoy buscando oportunidades laborales en el área de desarrollo web y análisis funcional.
        </p>
        <h1>Construyo sitios web modernos hechos a medida, basados en las necesidades de los clientes.</h1>
        <p>
          Me enfoco en el desarrollo web y la creación de soluciones tecnológicas innovadoras.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/cv.pdf" download>
            Descargar CV
          </a>
          <a className="button button-secondary" href="#proyectos">
            Ver proyectos
          </a>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card-content">
          <span className="badge">Frontend & UI</span>
          <h2>Trabajo con React, Vite y CSS moderno</h2>
          <p>
            Diseño experiencias intuitivas y páginas estáticas rápidas, perfectas para mostrar tu
            perfil profesional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;