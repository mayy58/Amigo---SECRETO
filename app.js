// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value;
  if (nuevoAmigo == "") {
    alert("Por favor, inserte un nombre");
  } else {
    nombresAmigos.push(nuevoAmigo);
    limpiarCaja();
    mostrarListaDeAmigos();
    console.log(nombresAmigos);
  }
}

function mostrarListaDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; //limpia la lista existente

  for (let i = 0; i < nombresAmigos.length; i++) {
    const li = document.createElement("li"); // crea un li nuevo
    li.textContent = nombresAmigos[i];
    lista.appendChild(li); //agrega <li> al <ul>
  }
}
