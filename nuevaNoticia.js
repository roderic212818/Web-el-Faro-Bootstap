document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-articulo');
    formulario.addEventListener('submit', publicarNoticia);
});

function publicarNoticia(evento) {
    evento.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const categoria = document.getElementById('categoria').value;
    const contenido = document.getElementById('contenido').value;
    const imagenInput = document.getElementById('imagenInput');

    // Obtener el identificador único de la noticia
    const id = new Date().getTime();

    // Buscar si ya existe una noticia con el mismo identificador
    const noticiaExistente = document.querySelector(`.card[data-id="${id}"]`);

    // Crear un elemento article para la noticia si no existe una noticia existente
    const noticia = noticiaExistente || document.createElement('div');
    noticia.classList.add('card');
    noticia.classList.add('noticia');
    noticia.setAttribute('data-id', id);

    // Actualizar el título, autor, imagen y el contenido de la noticia
    const imagenNoticia = document.createElement('img');
    const imagen = imagenInput.files[0];
    const imagenUrl = URL.createObjectURL(imagen);
    imagenNoticia.src = imagenUrl;
    imagenNoticia.classList.add('card-img-top');

    if (noticiaExistente) {
        // Si ya existe una noticia con el mismo identificador, reemplazar su contenido
        noticia.querySelector('.card-img-top').replaceWith(imagenNoticia);
        noticia.querySelector('.card-title').textContent = titulo;
        noticia.querySelector('.card-text').textContent = autor;
        noticia.querySelector('.card-category').textContent = categoria;
        noticia.querySelector('.card-content').textContent = contenido;
    } else {
        // Si no existe una noticia con el mismo identificador, crear una nueva noticia
        noticia.appendChild(imagenNoticia);

        const tituloNoticia = document.createElement('h5');
        tituloNoticia.textContent = titulo;
        tituloNoticia.classList.add('card-title')
        noticia.appendChild(tituloNoticia);

        /*const nombreAutor = document.createElement('p');
        nombreAutor.textContent = autor;
        nombreAutor.classList.add('card-text')
        nombreAutor.classList.add('nombreAutor')
        noticia.appendChild(nombreAutor);*/

        /*const categoriaNoticia = document.createElement('p');
        categoriaNoticia.textContent = categoria;
        categoriaNoticia.classList.add('card-text')
        categoriaNoticia.classList.add('card-category')
        noticia.appendChild(categoriaNoticia);*/


        /*const fechaNoticia = document.createElement('p');
        fechaNoticia.textContent = new Date().toLocaleDateString();
        noticia.appendChild(fechaNoticia);
    
        const horaNoticia = document.createElement('p');
        horaNoticia.textContent = new Date().toLocaleTimeString();
        noticia.appendChild(horaNoticia);*/

        const contenidoNoticia = document.createElement('p');
        contenidoNoticia.textContent = contenido;
        contenidoNoticia.classList.add('card-text')
        contenidoNoticia.classList.add('card-content')
        noticia.appendChild(contenidoNoticia);

        const contenedorNoticias = document.getElementById('destacado');
        contenedorNoticias.appendChild(noticia);

    }

    // Limpiar el formulario después de publicar o actualizar la noticia
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
    document.getElementById('autor').value = '';
}
