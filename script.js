function mostrarDetalle(event) {
    var detalle = document.getElementById('detalle-evento');
    var titulo = event.currentTarget.querySelector('h3').innerText;
    var descripcion = event.currentTarget.querySelector('p').innerText;
    var imagenSrc = event.currentTarget.querySelector('img').src; // Obtener la URL de la imagen

    document.getElementById('titulo-detalle').innerText = titulo;
    document.getElementById('descripcion-detalle').innerText = descripcion;
    document.getElementById('imagen-detalle').src = imagenSrc; // Mostrar la imagen en el modal
    detalle.style.display = 'block';
}

function cerrarDetalle() {
    document.getElementById('detalle-evento').style.display = 'none';
}
