// Pergunta 01 - recursividade - Contagem de items do cardápio
const cardapioTotal = ["Hamburguer", "Suco", "Batata Frita", "MilkShake", "Refrigerante"];
function contagemCardapio(cardapio) {
  if (cardapioTotal.length === 0) {
    return 0;
  } else {
    cardapioTotal.pop();
    return 1 + contagemCardapio(cardapio);
  }
}
console.log(contagemCardapio(cardapioTotal));

// Pergunta 02 - Cálculo do Valor Total das Vendas durante um mês

const vendasDiarias = [
  15, 20, 40, 10, 25, 22, 13, 10, 33, 45, 77, 89, 76, 88, 90, 55, 50, 40, 34, 49, 10, 15, 33, 15, 70, 53, 66, 43, 40,
  13, 90,
];

const precoHamburguer = 10;

function calcularValorTotalVendas(vendasDiarias, precoHamburguer, dia) {
  if (dia >= vendasDiarias.length) {
    return 0;
  }
  const valorVendaDiaAtual = vendasDiarias[dia] * precoHamburguer;
  const valorProximodia = calcularValorTotalVendas(vendasDiarias, precoHamburguer, dia + 1);

  return valorVendaDiaAtual + valorProximodia;
}
const TotalDeVendas = calcularValorTotalVendas(vendasDiarias, precoHamburguer, 0);
console.log(`O valor total nas vendas no mês é: ${TotalDeVendas}`);
