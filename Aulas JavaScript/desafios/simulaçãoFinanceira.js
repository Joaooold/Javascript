const metaInvestimento = 1500;
const metaOrcamento = 2000;

// Requisito 01 - simulação de Investimento
const investimentoInicial = 1000; // Valor inicial investido
const taxaMensal = 1.5; // taxa de rendimento em %
const meses = 12; // duração de investimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
  let saldoFinal = valorInicial;

  for (let i = 1; i <= meses; i++) {
    saldoFinal += saldoFinal * (taxaMensal / 100); // Rendimento Composto
  }
  return saldoFinal.toFixed(2);
}
// console.log(simularInvestimento(investimentoInicial, taxaMensal, meses));

// Requisito 02 - Gerenciamento de despesas
const despesas = {
  alimentacao: 500,
  transporte: 150,
  aluguel: 1200,
  lazer: 200,
};

function gerenciarDespesas(despesas) {
  let totalDespesas = 0;
  for (let categoria in despesas) {
    totalDespesas += despesas[categoria]; // Soma o valor de cada categorias
  }
  return totalDespesas;
}
// console.log(gerenciarDespesas(despesas))

// Requisito 03 - Obtenção do mês atual

function obtencaoMes() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const mesAtual = new Date();
  return meses[mesAtual.getMonth()]; // Retorna o mês atual - elemento do indice retornando a string correta
}
// console.log(obtencaoMes())

// Requisito 04 - Geração de relatório financeiro

function gerarRelatorio(investimentoInicial, taxa, meses, despesas, metaInvestimento, metaOrcamento) {
  const saldoInvestimento = simularInvestimento(investimentoInicial, taxa, meses);
  const totalDespesas = gerenciarDespesas(despesas);
  const mesAtual = meses;
  console.log("=== Relatório Financeiro ===");
  console.log(`Mês: ${mesAtual}`);
  console.log(`Saldo final do investimento: R$ ${saldoInvestimento}`);
  console.log(`Total despesas: R$ ${totalDespesas}`);
}
console.log(gerarRelatorio( taxaMensal, meses, despesas))

// Não concluido