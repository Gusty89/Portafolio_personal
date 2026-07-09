import ReadSection from './ReadSection.jsx';

function Contact({ theme }) {
  return (
    <section className={`section contact-section ${theme}`} aria-labelledby="contact-title">
      <div className="section-header">
        <h2 id="contact-title">Contacto</h2>
        <ReadSection text="Estoy disponible para nuevos proyectos o colaboraciones. 
        Llena el siguiente formulario, o también puedes contactarme directamente en:
        Email: paniaguagustavodavid@gmail.com" ariaLabel="Escuchar sección de contacto" />
      </div>

      <p>Estoy disponible para nuevos proyectos o colaboraciones. Llena el siguiente formulario:</p>

      {/* Formulario conectado a Formspree */}
      <form action="https://formspree.io/f/TU_ID_AQUI" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Tu Correo Electrónico:</label>
          <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tu Mensaje:</label>
          <textarea id="message" name="message" required rows="5" placeholder="Hola, me gustaría contactarte para..."></textarea>
        </div>

        <button type="submit" className="button button-primary">Enviar mensaje</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <p>O también puedes contactarme directamente en:</p>
        <p><strong>Email:</strong> paniaguagustavodavid@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;