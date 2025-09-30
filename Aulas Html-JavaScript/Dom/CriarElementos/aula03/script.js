// setAtribute - obter o valor do atributo
// getAtribute - definir ou modificar o valor
function changeImage() {
  const imagem = document.getElementById("myImage");
  const imagemAtual = imagem.getAttribute("src");

  if (imagemAtual === "imagem1.png") {
    imagem.setAttribute("src", "imagem2.png");
    imagem.setAttribute("alt", "Professor Daniel");
  } else {
    imagem.setAttribute("src", "imagem1.png");
    imagem.setAttribute("alt", "Pessoa Misteriosa");
  }
}

function changeType() {
  const input = document.querySelector("input");
  const inputAtual = input.getAttribute("type");

  switch (inputAtual) {
    case "text":
      input.setAttribute("type", "number");
      break;
    case "number":
      input.setAttribute("type", "radio")
      break
    case "radio":
      input.setAttribute("type", "date")
      break
    case "date":
      input.setAttribute("type", "color")
      break
    case "color":
      input.setAttribute("type", "time")
      break
      default:
        input.setAttribute("type", "text")
  }
}
