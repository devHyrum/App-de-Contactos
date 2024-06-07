const botonDeLaEsquina = document.querySelector('#addContactBtn')
const ventanaEmergente = document.querySelector('#modal')
const cerrarVentana = document.querySelector('.close')

/*botonDeLaEsquina.addEventListener('click', function() {
    ventanaEmergente.style.display = 'block';
});*/

function abrirModal() {
    modal.style.display = 'grid';
}
botonDeLaEsquina.addEventListener('click',abrirModal);

cerrarVentana.addEventListener('click', function(){
    ventanaEmergente.style.display = 'none';    
});

const eliminarNotas = document.querySelectorAll('.icon'); //Seleccionamos los elementos con la clase .icon del html
eliminarNotas.forEach(eliminarNota => { //Usamos el forEach para iterar sobre cada uno de estos elementos
    eliminarNota.addEventListener('click', function(){
        const contactoAEliminar = this.parentElement.parentElement;
        contactoAEliminar.remove();
    });
});

window.addEventListener('click', function(event) {
    if (event.target === ventanaEmergente) {
        ventanaEmergente.style.display = 'none'; // Oculta o modal
    }
});


const formulario = document.querySelector('#contactForm');
const nombre = document.querySelector('#name'); //si utilizamos el document.querybyID no necesitamos convertir la constante en .value
const correo = document.querySelector('#email');
const celular = document.querySelector('#phone');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre1 = nombre.value
    const correo1 = correo.value
    const celular1 = celular.value

    const nuevoContacto = document.createElement('li');

    nuevoContacto.classList.add('contact');
    nuevoContacto.innerHTML = `
        <span class="name">${nombre1}</span>
        <span class="details">${correo1} - ${celular1}<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
        <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span></span>
    `;
    const listaContactos = document.querySelector('.contact-list'); 
    listaContactos.appendChild(nuevoContacto); //añade la 'li' creada al ul class="contact-list"

    const nuevoIconoEliminar = nuevoContacto.querySelector('.icon');
    nuevoIconoEliminar.addEventListener('click', function() {
        const contactoAEliminar = this.parentElement.parentElement;
        contactoAEliminar.remove();
    });

    formulario.reset();
    ventanaEmergente.style.display = 'none';
});
