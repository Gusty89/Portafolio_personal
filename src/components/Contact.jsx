import ReadSection from './ReadSection.jsx';

function Contact() {
  const contactText = `Estoy disponible para nuevos proyectos o colaboraciones. Email: paniaguagustavodavid@gmail.com. GitHub: https://github.com/Gusty89. LinkedIn: https://www.linkedin.com/in/gustavo-david-paniagua/`;

  return (
    <section className="section contact-section" aria-labelledby="contact-title">
      <div>
        <div className="section-header">
          <h2 id="contact-title">Contacto</h2>
          <ReadSection text={contactText} ariaLabel="Escuchar la sección de contacto" />
        </div>
        <p>Estoy disponible para nuevos proyectos o colaboraciones.</p>
        <p>
          <strong>Email:</strong> paniaguagustavodavid@gmail.com
        </p>
        <p>
          <strong>GitHub:</strong> https://github.com/Gusty89
        </p>
        <p>
          <strong>LinkedIn:</strong> https://www.linkedin.com/in/gustavo-david-paniagua/
        </p>
      </div>
    </section>
  );
}

export default Contact;