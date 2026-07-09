export const projects = [
  {
    title: 'Organizador Automático de Descargas',
    description: `Este programa monitorea en tiempo real la carpeta de descargas del usuario.
Cada vez que se descarga un archivo, el sistema detecta el evento y lo mueve automáticamente a una carpeta de destino, organizada por tipo de archivo (según su extensión).
También permite ejecutar una clasificación inicial de los archivos existentes en la carpeta de descargas.
Todo el proceso se muestra mediante una interfaz gráfica (GUI) en Tkinter.`,
    tech: ['Python', 'tkinter', 'watchdog', 'os', 'shutil'],
    link: 'https://github.com/Gusty89/organizador-automatico-de-descargas/tree/dev',
  },
  {
    title: 'Gestor de Aulas',
    description: `Aplicación web desarrollada junto a un grupo de compañeros de la carrera, en la que
    se propone una solución de transformación digital para la Universidad Nacional de José. C. Paz, que optimiza la gestión y reserva de aulas.
Centraliza horarios, recursos y disponibilidad en una sola plataforma.
Facilita la coordinación entre docentes, gestores de aulas y administración.
Minimiza errores de asignación y solapamientos de espacios.
Aumenta la eficiencia operativa y la transparencia en la institución.`,
    tech: ['Vue.js', 'Node.js', 'Express', 'Typescript', 'PostgreSQL', 'Sequelize', 'Docker'],
    link: 'https://www.linkedin.com/posts/gustavo-david-paniagua_transformaciondigital-unpaz-tecnologia-ugcPost-7475562769782804481-KK0j/',
  },
];