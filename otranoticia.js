document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-articulo');
    formulario.addEventListener('submit', publicarNoticia);


    const contenedorNoticiasDestacada = document.getElementById('destacado');

    let noticiaAnterior = null;


    function publicarNoticia(evento) {
        evento.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Obtener los valores del formulario

        const imagenInput = document.getElementById('imagenInput');
        // seleccionar el elemento del input
const contenidoInput = document.querySelector('#titulo');

// obtener el valor actual del input
const contenidoValor = contenidoInput.value;

        // Crear un elemento article para la noticia
        const noticia1 = document.createElement('div');
        noticia1.classList.add('card');


        // Agregar imagen  y titulo

        const imagenNoticia = document.createElement('img');
        const imagen = imagenInput.files[0];
        const imagenUrl = URL.createObjectURL(imagen);
        imagenNoticia.src = imagenUrl;
        imagenNoticia.classList.add('card-img-top');
        noticia1.appendChild(imagenNoticia);


        const nuevoDivBody = document.createElement('div');
        nuevoDivBody.classList.add('card-body');


        const tituloNoticia = document.createElement('h5');
        tituloNoticia.textContent = contenidoValor;
        tituloNoticia.classList.add('card-title')
        nuevoDivBody.appendChild(tituloNoticia);



        noticia1.appendChild(nuevoDivBody);








        //logica
        // Si ya existe una noticia anterior, reemplazarla con la nueva
        if (noticiaAnterior !== null) {
            contenedorNoticiasDestacada.replaceChild(noticia1, noticiaAnterior);
        } else {
            contenedorNoticiasDestacada.appendChild(noticia1);
        }

        // Guardar la nueva noticia como noticia anterior
        noticiaAnterior = noticia1;



        // Limpiar el formulario después de publicar la noticia

    }

});