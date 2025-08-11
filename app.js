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

function sortearAmigo() {
  if (nombresAmigos.length < 2) {
    alert("Debe haber al menos 2 amigos para hacer el sorteo.");
    return;
  }

  const sorteados = [...nombresAmigos]; // clonamos el array
  let valido = false;

  // Repetimos hasta que nadie se toque a sí mismo
  while (!valido) {
    // Mezclamos el array
    sorteados.sort(() => Math.random() - 0.5);

    // Verificamos si alguien se sorteó a sí mismo
    valido = true;
    for (let i = 0; i < nombresAmigos.length; i++) {
      if (nombresAmigos[i] === sorteados[i]) {
        valido = false;
        break;
      }
    }
  }

  // Mostramos los resultados
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar antes de mostrar los pares

  for (let i = 0; i < nombresAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${nombresAmigos[i]} → ${sorteados[i]}`;
    lista.appendChild(li);
  }
}
