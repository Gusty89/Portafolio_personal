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
];