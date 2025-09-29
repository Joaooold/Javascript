function adicionarLista() {
  // O body nao precisa de getElement porque ele é filho de html
  const body = document.body;
  const ul = document.getElementById("itens-lista");
  const novaLista = document.createElement("li");
  const novoInput = document.createElement("input");

  // Usando appendChild para dizer que o elemento filho é do ul e li

  ul.appendChild(novaLista);
  novaLista.appendChild(novoInput);

  body.appendChild(novoInput);
  console.log(ul);
  console.log(body);
}
