import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReadSection from './ReadSection.jsx';

function Contact({ theme }) {
  // REEMPLAZA 'TU_ID_AQUI' POR TU ID REAL DE FORMSPREE
  const [state, handleSubmit] = useForm("mrewwdld");

  return (
    <section className={`section contact-section ${theme}`} aria-labelledby="contact-title">
      <div className="section-header">
        <h2 id="contact-title">Contacto</h2>
        <ReadSection 
          text="Estoy disponible para nuevos proyectos o colaboraciones. Llena el siguiente formulario, o también puedes contactarme directamente en mi correo electrónico." 
          ariaLabel="Escuchar sección de contacto" 
        />
      </div>

      <p>Estoy disponible para nuevos proyectos o colaboraciones. Llena el siguiente formulario:</p>

      {/* Si el envío fue exitoso, mostramos mensaje de confirmación */}
      {state.succeeded ? (
        <div className="form-success">
          <p>¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</p>
          <ReadSection 
          text="¡Gracias por tu mensaje! Me pondré en contacto contigo pronto." 
          ariaLabel="Escuchar sección de contacto" 
        />
        </div>
      ) : (
        /* Formulario con el manejador de Formspree */
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Tu Correo Electrónico:</label>
            <input 
              id="email" 
              type="email" 
              name="email" 
              required 
              placeholder="ejemplo@correo.com" 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Tu Mensaje:</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="5" 
              placeholder="Hola, me gustaría contactarte para..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting} 
            className="button button-primary"
          >
            {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      )}

      <div style={{ marginTop: '20px' }}>
        <p>O también puedes contactarme directamente en:</p>
        <p><strong>Email:</strong> paniaguagustavodavid@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;