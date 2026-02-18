// Exercício 1: Você é responsável por atualizar os salários de todos os funcionários de uma
// empresa. A empresa decidiu aumentar o salário de todos em 10%. Crie um array com os
// salários atuais e utilize o método .map() para calcular o novo salário de cada funcionário. Qual
// será o array resultante? 10% = 0.1
const listaSalarios = [3000, 4500, 5000, 6000, 7500];
const salarioAumentado = listaSalarios.map((salarioValor) => Math.round(1.1 * salarioValor));
// console.log(salarioAumentado);

// Exercício 2: Uma loja decidiu reajustar os preços de todos os produtos em 5% para cobrir os
// custos operacionais. Crie um array com os preços dos produtos e utilize o método .map() para
// calcular os novos preços. Quais serão os novos preços? 5% = 0.05
const listaPreco = [50, 100, 150, 200, 250];
const precoAumentado = listaPreco.map((precoValor) => 1.05 * precoValor);
// console.log(precoAumentado);

// Exercício 3: Você precisa adicionar um identificador único (ID) a cada funcionário da empresa.
// Crie um array com os nomes dos funcionários e utilize o método .map() para adicionar um ID
// a cada um deles. O ID deve ser baseado na posição do funcionário no array. Como ficará o
// array resultante?
const funcionarios = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
const funcionarioComId = funcionarios.map((nome, index) => ({
  id: index + 1,
  nome: nome,
}));
// console.log(funcionarioComId);

// Para os exercícios 4, 5 e 6 utilize a estrutura do objeto abaixo:
const imoveis = [
  { id: 1, tipo: "Apartamento", valor: 400000, disponivel: true, bairro: "Centro" },
  { id: 2, tipo: "Casa", valor: 550000, disponivel: false, bairro: "Subúrbio" },
  { id: 3, tipo: "Cobertura", valor: 900000, disponivel: true, bairro: "Centro" },
  { id: 4, tipo: "Apartamento", valor: 300000, disponivel: false, bairro: "Zona Sul" },
  { id: 5, tipo: "Casa", valor: 700000, disponivel: true, bairro: "Centro" },
];

// Exercício 4: Você tem uma lista de imóveis, alguns disponíveis para venda e outros não.
// Utilize o método .filter() para criar uma nova lista contendo apenas os imóveis que estão
// disponíveis para venda. Qual será o array resultante?
const imoveisDisponiveis = imoveis.filter((vendaDisponivel) => vendaDisponivel.disponivel);
// console.log(imoveisDisponiveis)

// Exercício 5: Você tem uma lista de imóveis com seus respectivos valores. Utilize o método
// .filter() para criar uma nova lista contendo apenas os imóveis que têm valor acima de R$
// 500.000. Qual será o array resultante?
const imoveisAltoCusto = imoveis.filter((imoveiscaros) => imoveiscaros.valor > 500_000);
// console.log(imoveisAltoCusto)

// Exercício 6: Você tem uma lista de imóveis em diferentes bairros da cidade. Utilize o método
// .filter() para criar uma nova lista contendo apenas os imóveis localizados no bairro
// "Centro". Qual será o array resultante?
const imoveisLocalidade = imoveis.filter((localImoveis) => localImoveis.bairro === "Centro");
// console.log(imoveisLocalidade)

// Exercício 7: Você tem um array de objetos representando as vendas de uma empresa, onde
// cada objeto contém o valor da venda. Utilize o método .reduce() para calcular o faturamento
// total da empresa. Qual será o valor total?
const vendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
  { id: 4, valor: 4100 },
  { id: 5, valor: 1800 },
];
const vendasTotal = vendas.reduce((acumulador, elementoAtual) => acumulador + elementoAtual.valor, 0);
// console.log(vendasTotal);

// Exercício 8: Você tem um array de objetos representando avaliações de clientes, onde cada
// objeto contém uma pontuação de satisfação (de 1 a 5). Utilize o método .reduce() para
// calcular a média de satisfação dos clientes. Qual será a média?
const clientesSatisfacao = [
  { cliente: "João", pontuacao: 4 },
  { cliente: "Maria", pontuacao: 5 },
  { cliente: "Pedro", pontuacao: 3 },
  { cliente: "Ana", pontuacao: 4 },
  { cliente: "Lucas", pontuacao: 5 },
];
const pontuacaoMedia = clientesSatisfacao.reduce(
  (acumulador, elementoAtual) => acumulador + elementoAtual.pontuacao,
  0,
);
const mediaTotal = pontuacaoMedia / clientesSatisfacao.length;
// console.log(mediaTotal);

// Exercício 9: Você tem um array de objetos representando produtos vendidos, onde cada
// objeto contém o nome do produto e sua categoria. Utilize o método .reduce() para criar um
// objeto que conte quantos produtos foram vendidos em cada categoria. Como ficará o objeto
// resultante?
const produtosVendidos = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Calça", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Celular", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Meias", categoria: "Vestuário" },
];
const contagemPorCategoria = produtosVendidos.reduce((contagem, produto) => {
  contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1;
  return contagem;
}, {});
// console.log(contagemPorCategoria)

// Exercício 10: Crie uma função tradicional chamada calcularDesconto que receba o preço
// de umproduto e a porcentagem de desconto, e retorne o valor do produto com o desconto
// aplicado. Após criar a função tradicional, transforme-a em uma Arrow Function.
// função normal
const precoProduto = 200;
const percentualDesconto = 15;
function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}
const resultado = calcularDesconto(precoProduto, percentualDesconto);
// console.log(resultado);
// arrowFunction
const calcularDescontoArrow = (preco, desconto) => preco - preco * (desconto / 100);
const resultadoArrow = calcularDescontoArrow(precoProduto, percentualDesconto);
// console.log(resultadoArrow);

// Exercício 11: Crie uma função tradicional chamada filtrarPorCategoria que receba uma
// lista de produtos e uma categoria, e retorne os produtos que pertencem àquela categoria. Após
// criar a função tradicional, transforme-a em uma Arrow Function.
// função normal
const produtos = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Calça", categoria: "Vestuário" },
];
const categoriaDesejada = "Vestuário";
function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(function (produto) {
    return produto.categoria === categoria;
  });
}
const resultadoCategoria = filtrarPorCategoria(produtos, categoriaDesejada);
// console.log(resultadoCategoria);
// Função Arrow
const filtrarPorCategoriaArrow = (produtos, categoria) => produtos.filter((produto) => produto.categoria === categoria);
filtrarPorCategoriaArrow(produtos, categoriaDesejada);
console.log(filtrarPorCategoriaArrow(produtos, categoriaDesejada));

// Exercício 12: Crie uma função tradicional chamada calcularFaturamentoTotal que
// receba uma lista de vendas e retorne o faturamento total somando o valor de todas as vendas.
// Após criar a função tradicional, transforme-a em uma Arrow Function.
const listaVendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
];
function calcularFaturamentoTotal(vendas) {
  const vendasTotal = vendas.reduce(function (total, venda) {
    return total + venda.valor;
  }, 0);
  return vendasTotal;
}
const faturamentoTotal = calcularFaturamentoTotal(listaVendas);
// console.log(faturamentoTotal);
// Arrow Function
const calcularFaturamentoTotalArrow = (vendas) => vendas.reduce((total, venda) => total + venda.valor, 0);
console.log(calcularFaturamentoTotalArrow(listaVendas))
