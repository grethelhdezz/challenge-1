// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo() {
    let textoNombre = document.getElementById('amigo').value;

    if (textoNombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        listaAmigos.push(textoNombre);
        actualizarLista();
    }
    limpiarCaja();
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let amigo of listaAmigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    }
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. ¡Agrega amigos para poder jugar!');
        return;
    }

    let indiceAmigo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAmigo];

    let resultadoAmigo = document.getElementById('resultado');
    resultadoAmigo.innerHTML = `<li>🎉 Amigo sorteado: ${amigoSecreto}</li>`;

    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

function reiniciarJuego() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('El juego ha sido reiniciado. ¡Puedes empezar de nuevo!');
}