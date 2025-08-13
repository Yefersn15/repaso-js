// Validar nombre con promesa
const verificarNombre = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre.trim() !== "") {
                resolve("✔️ Nombre válido.");
            } else {
                reject("❌ El nombre no puede estar vacío.");
            }
        }, 2000);
    });
};

const validarNombre = () => {
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "Validando...";

    verificarNombre(nombre)
        .then((respuesta) => {
            mensaje.innerText = respuesta;
        })
        .catch((error) => {
            mensaje.innerText = error;
        });
};

// Verificar edad con promesa
const verificarEdad = (edad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(edad) || edad <= 0) {
                reject("❌ Ingresa una edad válida.");
            } else if (edad < 18) {
                reject("❌ Eres menor de edad.");
            } else {
                resolve("✔️ Eres mayor de edad.");
            }
        }, 1500);
    });
};

document.getElementById("btnVerificar").addEventListener("click", () => {
    const edad = parseInt(document.getElementById("edadInput").value);
    const resultado = document.getElementById("resultadoEdad");

    resultado.textContent = "Verificando...";
    resultado.style.color = "#000";

    verificarEdad(edad)
        .then((mensaje) => {
            resultado.textContent = mensaje;
            resultado.style.color = "green";
        })
        .catch((error) => {
            resultado.textContent = error;
            resultado.style.color = "red";
        });
});

// Sumar dos números con promesa
const sumarPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject("❌ Ambos valores deben ser números.");
            } else {
                resolve(a + b);
            }
        }, 2000);
    });
};

const sumar = () => {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const resultado = document.getElementById("resultadoSuma");

    resultado.innerText = "Calculando...";

    sumarPromesa(n1, n2)
        .then((suma) => {
            resultado.innerText = `Resultado: ${suma}`;
        })
        .catch((error) => {
            resultado.innerText = error;
        });
};

// Obtener usuarios desde API
const obtenerUsuarios = () => {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "Cargando usuarios...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("❌ Error al consultar la API.");
            }
            return respuesta.json();
        })
        .then((usuarios) => {
            lista.innerHTML = "";
            usuarios.forEach((usuario) => {
                const li = document.createElement("li");
                li.textContent = `👤 ${usuario.name} - 📧 ${usuario.email} - 🏙️ ${usuario.address.city}`;
                lista.appendChild(li);
            });
        })
        .catch((error) => {
            lista.innerHTML = `<span style="color:red">${error.message}</span>`;
        });
};

document.getElementById("btnCargar").addEventListener("click", obtenerUsuarios);