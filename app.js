// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres ingresados
const listaAmigos = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 * Valida que el campo de entrada no esté vacío y actualiza la lista visual.
 */
function agregarAmigo() {
  const inputElement = document.getElementById("amigo");
  const nombre = inputElement.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista de amigos
  listaAmigos.push(nombre);

  // Actualizar la visualización de la lista
  actualizarLista();

  // Limpiar el campo de entrada
  inputElement.value = "";
}

/**
 * Función para actualizar el contenido de la lista visual en la página.
 */
function actualizarLista() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    // Crea el elemento de lista y agrega el nombre
    const li = document.createElement("li");
    li.textContent = amigo;

    // Crea el botón de borrado (la "x")
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-button");

    // Al hacer clic, se elimina el amigo del array y se actualiza la lista
    deleteBtn.addEventListener("click", function(e) {
      // Evitar que el clic se propague si hay otros eventos
      e.stopPropagation();
      listaAmigos.splice(index, 1);
      actualizarLista();
    });

    // Agrega el botón de borrado al elemento li
    li.appendChild(deleteBtn);

    // Añade el elemento li a la lista
    listaElement.appendChild(li);
  });
}

/**
 * Función para sortear un amigo secreto.
 * Valida que exista al menos un nombre en la lista y muestra el resultado de forma aleatoria.
 */
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agregue al menos un nombre.");
    return;
  }

  // Obtener un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSeleccionado = listaAmigos[indiceAleatorio];

  // Mostrar el resultado en la sección correspondiente
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";

  const li = document.createElement("li");
  li.innerHTML = `🎉 ¡El amigo secreto es: <span class="rainbow-text">${amigoSeleccionado}</span>!`;
  resultadoElement.appendChild(li);

}
