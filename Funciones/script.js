function saludar() {
    //Variable Let & Const //
    let input = document.getElementById('MiInput').value;

    if (input == "") {
        document.getElementById('resultado').innerText = "No se puede enviar un valor";
        document.getElementById('boton').style.background = "#ff0000";
    }
    else {
        document.getElementById('resultado').innerText = input;
        document.getElementById('MiInput').value = "";

        document.getElementById('boton').style.background = "#f0ff0f";
        document.getElementById('boton').innerText = "Funciona👌"
    }
}

function Calcular() {
    let numero1 = parseInt(document.getElementById("N1").value);
    let numero2 = parseInt(document.getElementById("N2").value);

    let operacion = document.getElementById('operacion').value;

    if (operacion === "sumar") {
        const resultado = document.getElementById('ResultadoCalculadora').innerText = (numero1 + numero2);
    }
    else if (operacion === "restar") {
        const resultado = document.getElementById('ResultadoCalculadora').innerText = (numero1 - numero2);
    }
    else if (operacion === "multiplicar") {
        const resultado = document.getElementById('ResultadoCalculadora').innerText = (numero1 * numero2);
    }
    else if (operacion === "dividir") {
        if (numero2 == 0) {
            const resultado = document.getElementById('ResultadoCalculadora').innerText = "No se puede dividir por 0"
        } else {
            const resultado = document.getElementById('ResultadoCalculadora').innerText = (numero1 / numero2);
        }
    }
    
    else if (operacion === "potenciar") {
        const resultado = document.getElementById('ResultadoCalculadora').innerText = (numero1 ** numero2);
    }
    else {
        const resultado = document.getElementById('ResultadoCalculadora').innerText = "Opcion Invalida❎"
    }
}