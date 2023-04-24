 /* codigo fecha */


const fechaHtml = document.getElementById('fecha');

const fechaActual = new Date();

const dia = fechaActual.getDate();

const mes = fechaActual.getMonth();

const año = fechaActual.getFullYear();

const fecha = `${dia}/${mes}/${año}`;

fechaHtml.innerHTML = fecha;

/* codigo hora */

const horaHtml = document.getElementById('hora');

const horaActual = new Date();

const horas = horaActual.getHours();

const minutos = horaActual.getMinutes();

const segundos = horaActual.getSeconds();

const hora = `${horas}:${minutos}:${segundos}`;

horaHtml.innerHTML = hora;