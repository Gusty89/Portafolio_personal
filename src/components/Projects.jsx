
import { projects } from '../data/projects.js';

import ReadSection from './ReadSection.jsx';

function Projects() {
  const projectsText = projects.map((project) => `${project.title}. ${project.description}`).join(' ');

  return (
    <section className="section" id="proyectos" aria-labelledby="projects-title">
      <div className="project-grid">
        <article className="project-card">
          <div className="section-header">
            <h2 id="projects-title">Proyectos</h2>
            <ReadSection text={projectsText} ariaLabel="Escuchar la sección de proyectos" />
          </div>
          {projects.map((project) => (
            <article className="project-entry" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver proyecto ${project.title}`}
              >
                Ver proyecto
              </a>
            </article>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Projects;