let amigos = []; // Arreglo para almacenar los nombres de los amigos.

// Función para asignar texto a un elemento.
function asignarTextoElemento(elemento, texto) {
    const el = document.querySelector(elemento);
    if (el) {
        el.innerHTML = texto;
    } else {
        console.error(`Elemento ${elemento} no encontrado.`);
    }
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Recibe el nombre del amigo
    const nombre = input.value.trim(); // Obtiene el valor del input
    
    // Validación para asegurar que el campo no esté vacío
    if (!nombre) { //Si no hay un "nombre"
        alert("Por favor, inserta un nombre.");
        return;
    }
        
    amigos.push(nombre); // Agrega el nombre al arreglo
    actualizarLista(); // Actualiza la lista mostrada en pantalla
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let listaHTML = "";
    for (let amigo of amigos) {
        listaHTML += `<li>${amigo}</li>`;
    }
    asignarTextoElemento("#listaAmigos", listaHTML);
}

// Función para elegir un amigo secreto aleatoriamente
function sortearAmigo() { 
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para el sorteo.");
        return;
    }  
    const randomIndex = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[randomIndex]; // Selecciona un amigo aleatorio
    mostrarResultado(elegido); // Muestra el resultado en la pantalla
}

// Función para mostrar el resultado del sorteo 
function mostrarResultado(elegido) {
    asignarTextoElemento("#resultado", `<li>Amigo Secreto: ${elegido}</li>`);

    // Mostrar el botón de reinicio
    const reiniciarBtn = document.createElement("button");
    reiniciarBtn.textContent = "Reiniciar Juego";
    reiniciarBtn.className = "reset-button";
    reiniciarBtn.onclick = reiniciarJuego;
    resultado.appendChild(reiniciarBtn); 
}
// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos
    actualizarLista(); // Actualizar la lista visible

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}
// Función para actualizar el estilo del botón "Añadir" al insertar nombre
function actualizarEstiloBoton() {
    const input = document.getElementById("amigo");
    const boton = document.querySelector(".button-add");
    const nombre = input.value.trim();

    if (nombre !== "") {
        boton.style.backgroundColor = "#4CAF50"; // Cambiar a verde
        boton.style.color = "white";
    } else {
        boton.style.backgroundColor = ""; // Restaurar estilo por defecto
        boton.style.color = "";
    }
}

// Escuchar cambios en el campo de entrada
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("input", actualizarEstiloBoton);