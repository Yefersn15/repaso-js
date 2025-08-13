const calcular = () => {
    let producto = document.getElementById("producto").value.trim();
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    const subtotal = document.getElementById("subtotal");
    const iva = document.getElementById("iva");
    const descuento = document.getElementById("descuento");
    const total = document.getElementById("total");

    if (!producto || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert("Por favor, completa correctamente todos los campos.");
        return;
    } else {

        const subtotal = (precio * cantidad);
        const iva = (subtotal * 0.19);
        const descuento = (subtotal * 0.10);
        const total = ((subtotal + iva) - descuento).toLocaleString();

        document.getElementById("subtotal").value = subtotal.toFixed(2);
        document.getElementById("iva").value = iva.toFixed(2);
        document.getElementById("descuento").value = descuento.toFixed(2);
        document.getElementById("total").value = total;
    }
}

document.getElementById('calcular').addEventListener("click", calcular);

const calcularEdad = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const fechaNacimientoInput = document.getElementById("fechaNacimiento").value;

    if (!nombre || !fechaNacimientoInput) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const fechaNacimiento = new Date(fechaNacimientoInput);
    const fechaActual = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
        alert("Fecha inválida.");
        return;
    }

    if (fechaNacimiento > fechaActual) {
        alert("La fecha de nacimiento no puede ser posterior a hoy.");
        return;
    }

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let dias = fechaActual.getDate() - fechaNacimiento.getDate();

    if (meses < 0 || (meses === 0 && dias < 0)) {
        edad--;
        meses += 12;
    }

    if (dias < 0) {
        const mesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }

    document.getElementById("resultadoEdad").value = `${nombre}, tienes ${edad} años, ${meses} meses y ${dias} días.`;
}

document.getElementById('edad').addEventListener("click", calcularEdad);