import { projects } from '../data/projects.js';
import ReadSection from './ReadSection.jsx';

function Projects({ theme }) { // 1. Recibimos la prop 'theme'
  const projectItems = Array.isArray(projects) ? projects : [];

  const projectsText = [
    'Mis proyectos',
    ...projectItems.map((project) => {
      const techText = Array.isArray(project.tech) ? project.tech.join(', ') : '';
      const titleText = project.title ? `${project.title}. ` : '';
      const descriptionText = project.description ? project.description : '';
      return `${titleText}${descriptionText}${techText ? `. Tecnologías utilizadas: ${techText}` : ''}`.trim();
    }),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // 2. Aplicamos la clase dinámica ${theme} para consistencia global
    <section
      className={`section ${theme}`}
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="project-grid">
        <article className="project-card">
          <div className="section-header">
            <h2 id="projects-title">Mis proyectos</h2>
            <ReadSection
              text={projectsText}
              ariaLabel="Escuchar la sección de proyectos"
            />
          </div>

          {projectItems.length === 0 ? (
            <p>Actualmente no hay proyectos disponibles para mostrar.</p>
          ) : (
            projectItems.map((project) => (
              <article className="project-entry" key={project.title}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Imagen del proyecto ${project.title}`}
                    className="project-image"
                  />
                )}
                <h3>{project.title}</h3>
                {project.type && <p className="project-type">{project.type}</p>}
                <p>{project.description}</p>
                <div className="project-tech">
                  {Array.isArray(project.tech) &&
                    project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      Ver proyecto
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver código fuente de ${project.title}`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver demostración de ${project.title}`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))
          )}
        </article>
      </div>
    </section>
  );
}

export default Projects;