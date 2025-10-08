const lista = document.querySelector("#taskList");
const input = document.querySelector("#taskInput");

function addTask() {
  if (input.value !== "") {
    const novaLi = document.createElement("li");
    const removerButton = document.createElement("button");

    novaLi.textContent = input.value + ": ";
    removerButton.textContent = "Remover";

    // remover item
    removerButton.onclick = function () {
      lista.removeChild(novaLi);
    };
    lista.appendChild(novaLi);
    novaLi.appendChild(removerButton);
  } else {
    alert("você precisa adicionar algo");
  }
  input.value = "";
}
