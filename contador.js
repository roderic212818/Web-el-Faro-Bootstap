




function actualizarContador() {
    let cantidadNoticias = document.querySelectorAll('.noticia').length - 1;
    const miElemento = document.getElementById('contador');
    miElemento.innerHTML = cantidadNoticias;
}


setInterval(actualizarContador, 1000);
