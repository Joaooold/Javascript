// Pergunta 01 - FOR - Cálculo do faturamento semanal
const vendasPorDia = [20, 15, 25, 18, 22, 30, 28];
const precoPorHamburguer = 10;

function calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer) {
  let faturamentoSemanal = 0;
  for (let i = 0; i < vendasPorDia.length; i++) {
    faturamentoSemanal += vendasPorDia[i] * precoPorHamburguer;
  }
  return faturamentoSemanal;
}

const faturamentoTotal = calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer);
// console.log(faturamentoTotal);

// Pergunta 02 Listagem do cardápio de digital
const cardapio = [
  { nome: "Hamburguer", preco: 10 },
  { nome: "Pizza", preco: 30 },
  { nome: "Batata Frita", preco: 6 },
  { nome: "Refrigerante", preco: 7 },
  { nome: "Salgado", preco: 3.5 },
];
function listacardapio() {
  for (let i = 0; i < cardapio.length; i++) {
    console.log(`Cardapio: ${cardapio[i].nome}: ${cardapio[i].preco}`);
  }
}
// listacardapio();

// Pergunta 03 Contagem de dinheiro no caixa
function realizarVendas(totalVendas) {
  let dinheiroRecebido = 0;
  let vendasRealizadas = 0;
  let vendasConcluídas = false;

  while (!vendasConcluídas) {
    const valorDaCompra = 20;

    // Simular a venda
    dinheiroRecebido += valorDaCompra;
    vendasRealizadas++;

    // Verificação se as vendas atingiram o número
    if (vendasRealizadas >= totalVendas) {
      vendasConcluídas = true;
    }
  }
  console.log(`Total de dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
}
// realizarVendas(50)

// Pergunta 04 - Entrega de pedidos pendentes
const pedidos = ["Hamburguer", "Refrigerante", "Batata Frita", "Milk Shake", "Nuggets"];

function realizarPedidos(pedidosPendentes) {
  let pedidosRealizados = "";
  console.log("Iniciando entregas:");

  while (pedidos.length > 0) {
    pedidosRealizados = pedidos.shift();
    console.log(`Entragando: ${pedidosRealizados}`);
  }
  console.log("Todos os pedidos foram realizados");
}
// realizarPedidos(pedidos);

// Pergunta 05 - Do...While - Adivinhe o número secreto para desconto

let numerosecreto = Math.random().toFixed();
function numeroSecreto() {
  do {
    console.log("Adivinhe um número entre 0 e 1 e ganhe um desconto");
    if (numerosecreto === "1") {
      console.log("Parabêns você ganhou um desconto");
      break;
    } else {
      console.log("Você infezlimente não ganhou um desconto");
      break;
    }
  } while (numerosecreto);
}
// numeroSecreto();

// Pergunta 06 - Gerenciamento de estoque de item em falta
const estoqueLanchonete = {
  Hamburguer: 10,
  batataFrita: 5,
  Refrigerante: 15,
  MilkShake: 20,
};

function atualizarEstoque(estoque, itemFalta, quantidadeAdicionar) {
  if (estoque.hasOwnProperty(itemFalta)) {
    estoque[itemFalta] += quantidadeAdicionar;
    console.log(`Estoque foi atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
  } else {
    console.log("item não encontrado no estoque");
  }
}
console.log("Estoque da lanchonete:");
console.log(estoqueLanchonete);

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
  const itemFalta = "Refrigerante";
  const quantidadeAdicionar = 5;

  if (!estoqueLanchonete.hasOwnProperty(itemFalta)) {
    // Se o item não existe no estoque, exiba a mensagem
    if (!itemNaoEncontrado) {
      console.log("Item não foi econtrado");
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(`Limite do estoque: ${itemFalta}: ${estoqueLanchonete[itemFalta]} foi atingido!`);
  } else {
    atualizarEstoque(estoqueLanchonete, itemFalta, quantidadeAdicionar);
  }
} while (continuarAdicionando);
