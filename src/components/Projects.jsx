
import { projects } from '../data/projects.js';

function Projects() {
  return (
    <section className="section" id="proyectos">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;