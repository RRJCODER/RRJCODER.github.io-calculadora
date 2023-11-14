function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function borrar() {
    let pantalla = document.getElementById('pantalla');
    let x = pantalla.value;
    let cifras = x.length;

    if (cifras > 0) {
        let lastChar = x.substr(cifras - 1, 1);

        if (lastChar === ".") {
            coma = 0; // If we removed a dot, allow adding it again.
        }

        x = x.substr(0, cifras - 1);

        if (x === "") {
            x = "0";
        }

        pantalla.value = x;
    }
}