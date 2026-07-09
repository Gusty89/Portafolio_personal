import { useState } from 'react';
import ReadSection from './ReadSection.jsx';

const certifications = [
  {
    title: 'Introducción a la Ciberseguridad',
    issuer: 'Cisco Networking Academy',
    date: '19 de marzo de 2025',
    description: 'Certificado emitido por Cisco Networking Academy tras completar el curso de fundamentos en seguridad informática.',
    whatLearned: 'Lo que aprendí: Conceptos básicos de ciberseguridad, protección contra amenazas, controles de acceso, redes seguras y mejores prácticas para la defensa digital.',
    image: '/certificates/Ciberseguridad.jpeg',
  },
  {
    title: 'Python',
    issuer: 'Santander Open Academy',
    date: '9 de julio de 2025',
    description: 'Certificado de finalización del curso de Python de 8 horas, con 2 módulos y una autoevaluación aprobada.',
    whatLearned: 'Lo que aprendí: Programación en Python, manejo de variables, estructuras de control, funciones y automatización de tareas básicas.',
    image: '/certificates/Python.jpeg',
  },
  {
    title: 'Gestión de Proyectos y Fundamentos de metodología Agile',
    issuer: 'Santander Open Academy',
    date: '16 de julio de 2025',
    description: 'Certificado de finalización del curso de 8 horas que cubre gestión de proyectos y conceptos fundamentales de metodologías ágiles.',
    whatLearned: 'Lo que aprendí: Principios Agile, trabajo en equipo, planificación iterativa, prioridades de valor y coordinación efectiva en proyectos tecnológicos.',
    image: '/certificates/Agiles.jpeg',
  },
  {
    title: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: '25 de febrero de 2026',
    description: 'Certificado de Cisco Networking Academy por completar el curso sobre soporte técnico y atención al cliente en entornos IT.',
    whatLearned: 'Lo que aprendí: Resolución de problemas, soporte al usuario, procesos de servicio y comunicación efectiva dentro de equipos de tecnología.',
    image: '/certificates/Soporte.jpeg',
  },
];

function Certifications({ theme }) { // 1. Recibimos la prop 'theme'
  const [activeImage, setActiveImage] = useState(null);
  const [activeTitle, setActiveTitle] = useState('');

  const openImage = (image, title) => {
    setActiveImage(image);
    setActiveTitle(title);
  };

  const closeImage = () => {
    setActiveImage(null);
    setActiveTitle('');
  };

  const certificationsText = ['Certificaciones',
    ...certifications.map((cert) => {
      return `${cert.title}. ${cert.issuer}. ${cert.date}. ${cert.description}. ${cert.whatLearned}`;
    }),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // 2. Aplicamos la clase dinámica ${theme}
    <section className={`section ${theme}`} id="certifications" aria-labelledby="certifications-title">
      <div className="project-grid">
        <article className="project-card">
          <div className="section-header">
            <h2 id="certifications-title">Certificaciones</h2>
            <ReadSection text={certificationsText} ariaLabel="Escuchar la sección de certificaciones" />
          </div>
          {certifications.map((cert) => (
            <article className="project-entry certification-entry" key={cert.title}>
              <div className="certification-header">
                <img
                  src={cert.image}
                  alt={`${cert.title} - ${cert.issuer}`}
                  className="certification-image"
                  onClick={() => openImage(cert.image, cert.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      openImage(cert.image, cert.title);
                    }
                  }}
                />
                <div>
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <p>{cert.description}</p>
              <p>{cert.whatLearned}</p>
            </article>
          ))}
          <p>
            Más detalles y certificaciones adicionales en mi perfil de LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/gustavo-david-paniagua/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/gustavo-david-paniagua/
            </a>
          </p>
        </article>
      </div>
      {activeImage && (
        <div className="image-modal-overlay" onClick={closeImage}>
          <div className="image-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-modal-close"
              onClick={closeImage}
              aria-label="Cerrar imagen"
            >
              ×
            </button>
            <img src={activeImage} alt={activeTitle} className="image-modal-img" />
            <p>{activeTitle}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;