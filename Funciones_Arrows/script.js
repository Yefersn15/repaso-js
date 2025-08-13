document.getElementById('miBoton').addEventListener('click', () => {
    let input = document.getElementById('miInput').value;

    if (input === "") {
        document.getElementById('resultado').innerText = "No se puede enviar un valor";
        document.getElementById('miBoton').style.background = "#ff0000";
    } else {
        document.getElementById('resultado').innerText = `Hola! ${input} ¿Como estas?`;
        document.getElementById('miInput').value = "";
        document.getElementById('miBoton').style.background = "#f0ff0f";
        document.getElementById('miBoton').innerText = "Funciona👌";
    }
});



document.getElementById('botonCalcular').addEventListener('click', () => {
    const numero1 = parseInt(document.getElementById("n1").value);
    const numero2 = parseInt(document.getElementById("n2").value);
    let operacion = document.getElementById('operacion').value;
    if (operacion === "sumar") {
        const resultado = document.getElementById('calculo').innerText = (numero1 + numero2);
    }
    else if (operacion === "restar") {
        const resultado = document.getElementById('calculo').innerText = (numero1 - numero2);
    }
    else if (operacion === "multiplicar") {
        if (numero1 === 0 || numero2 === 0) {
            const resultado = document.getElementById('calculo').innerText = "Todo número multiplicado por 0 da 0";
        } else if (isNaN(numero1) || isNaN(numero2)) {
            const resultado = document.getElementById('calculo').innerText = "Todos los campos deben estar llenos";
        } else {
            const resultado = document.getElementById('calculo').innerText = (numero1 * numero2);
        }
    }
    else if (operacion === "dividir") {
        if (numero1 === 0 || numero2 === 0) {
            const resultado = document.getElementById('calculo').innerText = "No se puede dividir por 0. Llene correctamente los campos"
        } else if (isNaN(numero1) || isNaN(numero2)) {
            const resultado = document.getElementById('calculo').innerText = "Todos los campos deben estar llenos";
        } else {
            const resultado = document.getElementById('calculo').innerText = (numero1 / numero2);
        }
    }
    else if (operacion === "potenciar") {
        const resultado = document.getElementById('calculo').innerText = (numero1 ** numero2);
    }
    else {
        const resultado = document.getElementById('calculo').innerText = "Opcion Invalida❎"
    }
});

document.getElementById('botonCompra').addEventListener('click', () => {
    let Producto = document.getElementById('producto').value;
    let Cantidad = parseInt(document.getElementById('cantidad').value);
    let Precio = parseFloat(document.getElementById('precio').value);

    if (Producto === "" || isNaN(Cantidad) || isNaN(Precio)) {
        document.getElementById('resultado_Compra').value = "Llene todos los campos";
        document.getElementById('resultado_Compra').style.background = "#f0ff0f"
    } else {
        if (Cantidad < 1 || isNaN(Cantidad)) {
            document.getElementById('resultado_Compra').value = "La Cantidad no puede ser 0 o un numero negativo";
            document.getElementById('resultado_Compra').style.background = "#f0ff0f"
        }
        else if (Precio < 1 || isNaN(Precio)) {
            document.getElementById('resultado_Compra').value = "El Precio no puede ser 0 o un numero negativo";
            document.getElementById('resultado_Compra').style.background = "#f0ff0f"
        } else {
            const Total = (Cantidad * Precio);
            document.getElementById('resultado_Compra').value = `${Producto}, Unidades:${Cantidad}, Precio Unitario:${Precio}, Total a Pagar:$${Total}`;
            document.getElementById('resultado_Compra').style.background = "#none"
        }
    }
});