// Exercício 1: Mudança de cor ao passar o mouse sobre um elemento
const paragrafoCor = document.querySelector("p");
function passar() {
  paragrafoCor.style.color = "red";
}
function passarSair() {
  paragrafoCor.style.color = "inherit";
}

// Exercício 2: Exibição de alerta ao clicar em um botão
function clicar() {
  alert("Botão clicado!!!");
}

// Exercício 3: Mostrar mensagem ao focar e desfocar um campo de

const input = document.querySelector("input");
function focar() {
  input.value = "Campo em foco";
}
function desfocar() {
  input.value = "";
}
// Exercício 4: Alteração de imagem ao passar o mouse sobre ela

const imagem = document.querySelector("img");
function entrarImg() {
    imagem.src = "imagem2.png"
}
function sairImg() {
    imagem.src = "imagem1.png"
}