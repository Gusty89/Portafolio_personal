
import { projects } from '../data/projects.js';

function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="project-grid">
        <article className="project-card">
          <h2>Proyectos</h2>
          {projects.map((project) => (
            <div key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Projects;