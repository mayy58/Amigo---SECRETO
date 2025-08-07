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
    console.log(nombresAmigos);
  }
}
