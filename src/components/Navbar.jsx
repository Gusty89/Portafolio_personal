import { NavLink } from 'react-router-dom';

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre-mi">Quién soy</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/certificaciones">Certificaciones</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>

        <button
          type="button"
          className="button button-secondary theme-toggle"
          onClick={onToggleTheme}
          aria-label="Cambiar entre modo oscuro y modo claro"
          data-tooltip={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        >
          <span aria-hidden="true" style={{ fontSize: '1.2rem' }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;