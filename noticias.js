document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-articulo');
    formulario.addEventListener('submit', publicarNoticia);
});

function publicarNoticia(evento) {
    evento.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;

    // Crear un elemento article para la noticia
    const noticia = document.createElement('div');
    noticia.classList.add('noticia');

    // Agregar el título y el contenido de la noticia
    const tituloNoticia = document.createElement('h2');
    tituloNoticia.textContent = titulo;
    noticia.appendChild(tituloNoticia);

    

    const contenidoNoticia = document.createElement('p');
    contenidoNoticia.textContent = contenido;
    noticia.appendChild(contenidoNoticia);

    // Agregar un botón para eliminar la noticia
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        noticia.remove();
    });
    noticia.appendChild(botonEliminar);

    // Agregar la noticia al elemento "noticias"
    const contenedorNoticias = document.getElementById('container');
    contenedorNoticias.appendChild(noticia);

    // Limpiar el formulario después de publicar la noticia
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
}