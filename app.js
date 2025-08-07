// Variables globales
let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const ingresoDeAmigo = document.getElementById('amigo');
    const nombreAmigo = ingresoDeAmigo.value.trim();

    // Validación del input
    if (nombreAmigo === '') {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombreAmigo);
    ingresoDeAmigo.value = ''; // Limpiar el input

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual
function actualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpiar lista

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        ul.appendChild(li);
    });
}

// Función para sortear amigos secretos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo');
        return;
    }

    // Copia de la lista para no modificar la original
    const listaParaSortear = [...listaAmigos];
    const resultado = [];

    // Algoritmo de sorteo (evita que alguien se saque a sí mismo)
    for (let i = 0; i < listaAmigos.length; i++) {
        let indice;
        do {
            indice = Math.floor(Math.random() * listaParaSortear.length);
        } while (listaParaSortear[indice] === listaAmigos[i] && listaParaSortear.length > 1);

        const amigoSecreto = listaParaSortear.splice(indice, 1)[0];
        resultado.push({ persona: listaAmigos[i], amigoSecreto });
    }

    // Mostrar resultados
    mostrarResultados(resultado);
}

// Función para mostrar los resultados
function mostrarResultados(resultados) {
    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';

    resultados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.persona} ➔ ${item.amigoSecreto}`;
        ulResultado.appendChild(li);
    });
}