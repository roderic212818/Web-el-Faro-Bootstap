document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-articulo');
    formulario.addEventListener('submit', publicarNoticia);
    const contenedorNoticias = document.getElementById('destacado');
    let noticiaAnterior = null;

    function publicarNoticia(evento) {
        evento.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Obtener los valores del formulario
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const categoria = document.getElementById('categoria').value;
        const contenido = document.getElementById('contenido').value;
        const imagenInput = document.getElementById('imagenInput');

        // Crear un elemento article para la noticia
        const noticia = document.createElement('div');
        noticia.classList.add('card');
        

        // Agregar el título, autor, imagen y el contenido de la noticia
        const imagenNoticia = document.createElement('img');
        const imagen = imagenInput.files[0];
        const imagenUrl = URL.createObjectURL(imagen);
        imagenNoticia.src = imagenUrl;
        imagenNoticia.classList.add('card-img-top');
        noticia.appendChild(imagenNoticia);

        const tituloNoticia = document.createElement('h5');
        tituloNoticia.textContent = titulo;
        tituloNoticia.classList.add('card-title')
        noticia.appendChild(tituloNoticia);

        const contenidoNoticia = document.createElement('p');
        contenidoNoticia.textContent = contenido;
        noticia.appendChild(contenidoNoticia);


        //logica
        // Si ya existe una noticia anterior, reemplazarla con la nueva
        if (noticiaAnterior !== null) {
            contenedorNoticias.replaceChild(noticia, noticiaAnterior);
        } else {
            contenedorNoticias.appendChild(noticia);
        }

        // Guardar la nueva noticia como noticia anterior
        noticiaAnterior = noticia;

        // Limpiar el formulario después de publicar la noticia
        document.getElementById('titulo').value = '';
        document.getElementById('contenido').value = '';
        document.getElementById('autor').value = '';
    }
});
