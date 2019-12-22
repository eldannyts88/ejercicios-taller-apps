console.log('carga inicial');

const boton = window.document.querySelector('#boton');
boton.addEventListener('click', agregarClase);

function agregarClase() {
  console.log('se ejecuta la funcion agregarClase');
  if (caja.classList.length === 1) {
    caja.classList.remove('caja-principal');
  } else {
    const caja = window.document.querySelector('#caja');
    caja.classList.add('caja-principal');
  }
}