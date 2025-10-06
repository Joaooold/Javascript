const Elemento = document.getElementById("meuElemento");

function tornarCirculo() {
  Elemento.classList.add("circle");
  Elemento.classList.remove("square");
}

function tornarQuadrado() {
  Elemento.classList.add("square");
  Elemento.classList.remove("circle");
}

function alternarFormato() {
  Elemento.classList.toggle("circle");
  Elemento.classList.toggle("square");
}

function verificarClasse() {
  // Precisa de uma condição (metodo contains)
  if (Elemento.classList.contains("circle")) {
    console.log("Este item estar com a classe Circle");
  } else {
    console.log("Este item estar com a classe Square");
  }
}
