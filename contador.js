




function actualizarContador() {
    let cantidadNoticias = document.querySelectorAll('.noticia').length;
    const miElemento = document.getElementById('contador');
    miElemento.innerHTML = cantidadNoticias;
}


setInterval(actualizarContador, 1000);
