function Footer({ theme }) { // 1. Recibimos la prop 'theme'
  
  return (
    // 2. Usamos la clase dinámica basada en el estado recibido
    <footer className={`site-footer ${theme}`}>
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Gustavo David Paniagua.
          Todos los derechos reservados.
        </p>
        <p>
          Analista de Sistemas | Desarrollador Web
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Gusty89"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Gustavo Paniagua"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-david-paniagua/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Gustavo Paniagua"
          >
            LinkedIn
          </a>
          <a
            href="mailto:paniaguagustavodavid@gmail.com"
            aria-label="Enviar correo electrónico"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;