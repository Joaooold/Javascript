// Pergunta 01 - Listagem de Itens do cardápio
const itensCardapio = {
  nome: "Hamburguer",
  preco: 15,
  nome: "Refrigerante",
  preco: 5,
  nome: "Batata Frita",
  preco: 7,
  nome: "Milk Shake",
  preco: 10,
};
for(itens in itensCardapio)
    console.log(`${itens}`)
