document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('miModal'); // El único modal en la página
    var spanCerrar = modal ? modal.getElementsByClassName('modal-cerrar')[0] : null;
    var modalTituloEl = modal ? modal.getElementsByTagName('h2')[0] : null;
    // Obtener los elementos de párrafo dentro de la estructura específica del modal-contenido
    var modalContenidoDiv = modal ? modal.getElementsByClassName('modal-contenido')[0] : null;
    var modalParrafosEl = modalContenidoDiv ? modalContenidoDiv.getElementsByTagName('p') : [];

    // Seleccionar todos los elementos que pueden activar el modal
    var activadores = document.getElementsByClassName('activador-modal');

    // Añadir un event listener a cada activador
    for (var i = 0; i < activadores.length; i++) {
        activadores[i].onclick = function() {
            if (!modal) return; // No hacer nada si el modal no está en la página

            // Obtener el contenido de los atributos data-* del activador clickeado
            var titulo = this.dataset.modalTitulo || "Título por Defecto"; // Usar '||' para valor por defecto
            var parrafo1 = this.dataset.modalParrafo1 || "Contenido no especificado.";
            var parrafo2 = this.dataset.modalParrafo2 || ""; // Si no hay parrafo2, queda vacío

            // Actualizar el contenido del modal
            if (modalTituloEl) {
                modalTituloEl.textContent = titulo;
            }

            // Asegurarse de que los elementos de párrafo existan antes de intentar asignarles contenido
            if (modalParrafosEl.length > 0) {
                modalParrafosEl[0].innerHTML = parrafo1; // Usar innerHTML por si el data-* contiene HTML
            } else if (modalContenidoDiv && parrafo1) {
                // Si no hay párrafos pero hay contenido para parrafo1, crear el primer párrafo
                var nuevoP = document.createElement('p');
                nuevoP.innerHTML = parrafo1;
                modalContenidoDiv.appendChild(nuevoP); // Añadir antes del span de cierre si es posible, o ajustar estructura
                 // Re-obtener modalParrafosEl después de añadir uno nuevo si fuera necesario para parrafo2.
            }

            if (modalParrafosEl.length > 1) {
                modalParrafosEl[1].innerHTML = parrafo2;
            } else if (parrafo2 && modalParrafosEl.length > 0) {
                // Si solo existe el primer párrafo y hay contenido para el segundo.
                modalParrafosEl[0].innerHTML += "<br>" + parrafo2; // Opción simple: añadir al primero
            } else if (parrafo2 && modalContenidoDiv) {
                // Si no hay párrafos y hay contenido para parrafo2 (y parrafo1 también lo tuvo)
                var nuevoP2 = document.createElement('p');
                nuevoP2.innerHTML = parrafo2;
                modalContenidoDiv.appendChild(nuevoP2);
            }

            // Limpiar párrafos extra (más allá de los dos principales que esperamos)
            for (var j = 2; j < modalParrafosEl.length; j++) {
                modalParrafosEl[j].innerHTML = "";
                modalParrafosEl[j].style.display = 'none'; // Ocultarlos también
            }
            // Asegurar que los párrafos que sí usamos estén visibles si fueron ocultados antes
            if(modalParrafosEl[0]) modalParrafosEl[0].style.display = '';
            if(modalParrafosEl[1]) modalParrafosEl[1].style.display = '';


            modal.style.display = 'block';
        }
    }

    // --- Funcionalidad de cierre (común para todos los modales) ---
    if (spanCerrar && modal) {
        spanCerrar.onclick = function() {
            modal.style.display = 'none';
        }
    }
    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
});
