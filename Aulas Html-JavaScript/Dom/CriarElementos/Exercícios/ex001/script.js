const lista = document.querySelector("#taskList");
const input = document.querySelector("#taskInput");

function addTask() {
  if (input.value === "") {
    alert("você precisa adicionar algo");
  } else {
    const inputValor = input.value;
    const novaLi = document.createElement("li");
    novaLi.innerHTML = `${inputValor}`;
    lista.appendChild(novaLi);
  }
  input.value = " "
}
