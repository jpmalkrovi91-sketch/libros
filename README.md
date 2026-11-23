# Sitio de autor — Juan Pablo Malkrovi

Sitio web sencillo en HTML, CSS y JavaScript puros (sin frameworks), con la
estantería de libros para descarga gratuita en PDF, el perfil del autor y el
botón de «Invítame un café» (Buy Me a Coffee).

## Archivos

- `index.html` — el contenido: encabezado, estantería, «Sobre el autor» y café.
- `style.css` — los estilos: colores, tarjetas de libros y botones.
- `script.js` — un aviso para los botones aún pendientes de enlace.
- `portadas/` — las imágenes de las portadas de los libros.

## Cómo editar (desde la tablet)

1. Abre este repositorio en github.com y entra al archivo que quieras cambiar.
2. Toca el lápiz (Edit), haz tu cambio y guarda con «Commit changes».
3. El sitio publicado se actualiza solo en menos de un minuto.

## Tareas pendientes con fecha

- **Descargas**: en diciembre de 2026, subir los PDF a Google Drive y pegar
  cada enlace en su botón «Descargar PDF» dentro de `index.html`
  (buscar la clase `pendiente` y quitarla al pegar el enlace real).
- **Café**: pegar el enlace de Buy Me a Coffee en el botón de la sección
  «¿Te gustó un libro?» de `index.html` (también marcado con comentarios).

## Publicación

El sitio se publica con GitHub Pages desde la rama `main`, carpeta raíz.
Los PDF no viven en este repositorio: se enlazan desde Google Drive, para que
el sitio cargue ligero y los archivos queden bajo el control directo del autor.
