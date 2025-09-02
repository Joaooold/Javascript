// Pergunta 01 - forIn - Listagem de Itens do cardápio
const itensCardapio = {
  Hamburguer: 15,
  Refrigerante: 7,
  BatataFrita: 5,
  MilkShake: 10,
};
// for (itens in itensCardapio) console.log(`${itens}: ${itensCardapio[itens]}`);

// Pergunta 02 - Calcular total da conta

const cardapio = {
  Hamburguer: 15,
  Refrigerante: 7,
  BatataFrita: 5,
  MilkShake: 10,
};

const clientePedido = {
  Hamburguer: 4,
  Refrigerante: 3,
  BatataFrita: 2,
};

function calcularTotalPedidoCliente(itemCardapio, cliente) {
  let precoTotal = 0;

  for (const item in clientePedido) {
    if (item in cardapio) {
      precoTotal += clientePedido[item] * cardapio[item];
    }
  }
  return precoTotal;
}
const precoTotal = calcularTotalPedidoCliente(cardapio, clientePedido);
// console.log(`O preco Final é: ${precoTotal}`);

// Pergunta 04 - forOf - Listagem de itens de cardapio

const cardapioTotal = ["Hamburguer", "Suco", "Batata Frita", "MilkShake", "Refrigerante"];

function listagemItemCardapio(cardapio) {
  for (const item of cardapioTotal) {
    console.log(item);
  }
}
// listagemItemCardapio(cardapioTotal);

// Pergunta 05 - Calcular total da conta
const cardapioPrincipal = {
  Hamburguer: 15,
  Refrigerante: 7,
  BatataFrita: 5,
  MilkShake: 10,
};

const clientePedidoTotal = [
  { nome: "Hamburguer", quantidade: 5 },
  { nome: "Refrigerante", quantidade: 3 },
  { nome: "BatataFrita", quantidade: 2 },
];

function totalCompraPedidos(cardapio, pedidoCliente) {
  let valorTotal = 0

  for(const item of clientePedidoTotal) {
    if(item.nome in cardapioPrincipal) {
      valorTotal += cardapioPrincipal[item.nome] * item.quantidade
    }
  }
  return valorTotal
}
const valorTotal = totalCompraPedidos(cardapioPrincipal, clientePedidoTotal)
console.log(`O valor total dos pedidos foi: ${valorTotal}`)
