// Exercício 1: Você está desenvolvendo uma aplicação que exibe informações de clientes. Cada
// cliente pode ter uma lista de endereços, e você precisa extrair as cidades de todos os
// endereços. Use encadeamento opcional, operador de coalescência nula e os métodos map e
// filter para criar uma lista com as cidades
const clientes = [
  { nome: "Ana", enderecos: [{ cidade: "São Paulo" }, { cidade: "Campinas" }] },
  { nome: "Pedro", enderecos: [{ cidade: "Rio de Janeiro" }] },
  { nome: "Maria", enderecos: [] },
];

const cidades = clientes
  .filter((cliente) => cliente.enderecos?.length > 0) // Filtrar clientes que tem endereço
  .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? []) //Mapeia caada cliente para lista de cidade
  .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []); // unindo todos os arrays de cidades
// console.log(cidades)

// Refatoração
const cidadesRefatorar = clientes
  .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? []) //Mapeia caada cliente para lista de cidade
  .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []); // unindo todos os arrays de cidades
// console.log(cidadesRefatorar)

// Exercício 2: Você está desenvolvendo uma aplicação para filtrar produtos em estoque com
// base na disponibilidade. Alguns produtos podem não ter um valor definido para a quantidade
// emestoque. Use o operador de coalescência nula e o método filter para obter uma lista de
// produtos com quantidade em estoque maior que 0.
const produtos = [
  { nome: "Camiseta", quantidade: 10 },
  { nome: "Calça", quantidade: null },
  { nome: "Tênis", quantidade: 5 },
  { nome: "Jaqueta", quantidade: 0 },
];
const produtosDisponiveis = produtos.filter((produtoDisponivel) => (produtoDisponivel.quantidade ?? 0) > 0);
console.log(produtosDisponiveis);

// Exercício 3: Você está criando uma função para calcular o total de vendas de uma série de
// transações. Use parâmetros rest para aceitar uma lista de valores e o método reduce para
// somar todos os valores.
function somarValores(...valores) {
  return valores.reduce((acc, valorSomar) => acc + valorSomar, 0);
}
console.log(somarValores(100, 200, 300, 400, 500));

// Exercício 4: Você está desenvolvendo uma aplicação de catálogo e precisa atualizar uma lista
// de produtos adicionando uma nova propriedade emEstoque com o valor true. Use o operador
// spread e o método map para criar uma nova lista com essa propriedade adicionada.
const produtosRoupas = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 150, EmEstoque: false },
];
const produtosAtutalizados = produtosRoupas.map((produto) => ({
  ...produto,
  EmEstoque: true,
}));
console.log(produtosAtutalizados);

// Exercício 5: Você está criando uma função para analisar uma lista de vendas e encontrar a
// média de vendas para um determinado mês. Use destructuring para extrair os valores e
// combine filter e reduce para calcular a média.
const vendas = [
  { vendedor: "Ana", valor: 1000, mes: "Agosto" },
  { vendedor: "Pedro", valor: 1500, mes: "Agosto" },
  { vendedor: "Maria", valor: 1200, mes: "Julho" },
];
const calcularMediaVendas = (vendas, mes) => {
  const vendasDoMes = vendas.filter(({ mes: vendaMes }) => vendaMes === mes); // cria uma nova lista apenas com o mes de referencia
  const totalVendas = vendasDoMes.reduce((acumulador, { valor }) => acumulador + valor, 0); //Acumula o valor das vendas
  return vendasDoMes.length ? totalVendas / vendasDoMes.length : 0;
};
console.log(calcularMediaVendas(vendas, "Agosto"))
