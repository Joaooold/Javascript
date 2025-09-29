function criarElementoInnerText() {
  const ol = document.getElementById("itens-lista");
  const novaLista = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLista.innerText = "criado com innerText: ";
  ol.appendChild(novaLista);
  novaLista.appendChild(novoInput);
}

function criarElementoInnerHtml() {
  const ol = document.getElementById("itens-lista");
  const novaLista = document.createElement("li");

  novaLista.innerHTML = "<p>Criando parágrafo e um input usando innerHTML: <input type='text'/></p>";
  ol.appendChild(novaLista);
}

function criarElementoTextContent() {
  const ol = document.getElementById("itens-lista");
  const novaLista = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLista.textContent = "Atribuindo conteudo textContent: " 
  ol.appendChild(novaLista)
  novaLista.appendChild(novoInput)
}
