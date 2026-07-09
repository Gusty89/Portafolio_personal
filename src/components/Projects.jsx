
import { projects } from '../data/projects.js';

import ReadSection from './ReadSection.jsx';

function Projects() {
  const projectItems = Array.isArray(projects) ? projects : [];

  const projectsText = ['Mis proyectos',
    ...projectItems.map((project) => {
      const techText = Array.isArray(project.tech) ? project.tech.join(', ') : '';
      const titleText = project.title ? `${project.title}. ` : '';
      const descriptionText = project.description ? `${project.description}` : '';
      return `${titleText}${descriptionText}${techText ? `. ${techText}` : ''}`.trim();
    })
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="section" id="proyectos" aria-labelledby="projects-title">
      <div className="project-grid">
        <article className="project-card">
          <div className="section-header">
            <h2 id="projects-title">Mis proyectos</h2>
            <ReadSection text={projectsText} ariaLabel="Escuchar la sección de proyectos" />
          </div>
          {projects.map((project) => (
            <article className="project-entry" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {Array.isArray(project.tech) &&
                  project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
              </div>
              <div className="project-actions">
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  Ver proyecto
                </a>
              </div>
            </article>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Projects;