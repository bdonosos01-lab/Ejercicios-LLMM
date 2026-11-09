const barra = document.getElementById('rango');
const textoValor = document.getElementById('valor-rango');

barra.addEventListener('input', function() {
    textoValor.textContent = barra.value; // Cambiamos el texto por el valor actual
});

const btrerse = document.getElementById('buttonRestart');

btrerse.addEventListener('click', function() {
    textoValor.textContent = 0;               
});
                          