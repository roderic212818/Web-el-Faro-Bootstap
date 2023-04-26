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



    // Crear un elemento article para la noticia
    const noticia = document.createElement('div');
    noticia.classList.add('col-md-4');
    noticia.classList.add('noticia');

    // Crear un nuevo elemento div dentro del div noticia
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('card');
    nuevoDiv.classList.add('card-medium');


    const imagenNoticia = document.createElement('img');
    const imagen = imagenInput.files[0];
    const imagenUrl = URL.createObjectURL(imagen);
    imagenNoticia.src = imagenUrl;
    imagenNoticia.classList.add('card-img-top');
    nuevoDiv.appendChild(imagenNoticia);


    const nuevoDivBody = document.createElement('div');
    nuevoDivBody.classList.add('card-body');


    const tituloNoticia = document.createElement('h5');
    tituloNoticia.textContent = titulo;
    tituloNoticia.classList.add('card-title')
    nuevoDivBody.appendChild(tituloNoticia);
    
    const contenidoNoticia = document.createElement('p');
    contenidoNoticia.textContent = contenido;
    contenidoNoticia.classList.add('card-text')
    nuevoDivBody.appendChild(contenidoNoticia);

    const enlace =  document.createElement('a');
    enlace.textContent = 'ir a la noticia';
    enlace.classList.add('btn');
    enlace.classList.add('btn-primary');
    nuevoDivBody.appendChild(enlace);

    nuevoDiv.appendChild(nuevoDivBody);

    // Agregar el nuevo elemento div como hijo del elemento noticia
    noticia.appendChild(nuevoDiv);

    
    // Agregar el título, autor,fecha, hora, imagen y el contenido de la noticia
   

    

   
    /*const nombreAutor = document.createElement('p');
    nombreAutor.textContent = autor;
    nombreAutor.classList.add('card-text')
    nombreAutor.classList.add('nombreAutor')
    noticia.appendChild(nombreAutor);*/

    /*const fechaNoticia = document.createElement('p');
    fechaNoticia.textContent = new Date().toLocaleDateString();
    noticia.appendChild(fechaNoticia);

    const horaNoticia = document.createElement('p');
    horaNoticia.textContent = new Date().toLocaleTimeString();
    noticia.appendChild(horaNoticia);*/



    /*const categoriaNoticia = document.createElement('p');
    categoriaNoticia.textContent = categoria;
    noticia.appendChild(categoriaNoticia);
    noticia.appendChild(nombreAutor);*/



   


    // Agregar un botón para eliminar la noticia
    /*const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        noticia.remove();
    });
    noticia.appendChild(botonEliminar);*/

    // Agregar la noticia al elemento "noticias"
    const contenedorNoticias = document.getElementById('normal');
    contenedorNoticias.appendChild(noticia);

    // Limpiar el formulario después de publicar la noticia
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
    document.getElementById('autor').value = '';
}