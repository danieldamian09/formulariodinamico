
// para dar el giro a la tarjeta //

const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#abrir-cerrar-formulario');  

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle ('active');
});

btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
});