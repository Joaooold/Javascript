// Exercício 1: Você é responsável por atualizar os salários de todos os funcionários de uma
// empresa. A empresa decidiu aumentar o salário de todos em 10%. Crie um array com os
// salários atuais e utilize o método .map() para calcular o novo salário de cada funcionário. Qual
// será o array resultante? 10% = 0.1
const listaSalarios = [3000, 4500, 5000, 6000, 7500];
const salarioAumentado = listaSalarios.map((salarioValor) => Math.round(1.1 * salarioValor));
console.log(salarioAumentado)

// Exercício 2: Uma loja decidiu reajustar os preços de todos os produtos em 5% para cobrir os
// custos operacionais. Crie um array com os preços dos produtos e utilize o método .map() para
// calcular os novos preços. Quais serão os novos preços? 5% = 0.05
const listaPreco = [50, 100, 150, 200, 250];
const precoAumentado = listaPreco.map((precoValor) => 1.05 * precoValor);
console.log(precoAumentado);

// Exercício 3: Você precisa adicionar um identificador único (ID) a cada funcionário da empresa.
// Crie um array com os nomes dos funcionários e utilize o método .map() para adicionar um ID
// a cada um deles. O ID deve ser baseado na posição do funcionário no array. Como ficará o
// array resultante?
const funcionarios = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
const funcionarioComId = funcionarios.map((nome, index) => ({
    id: index + 1, 
    nome: nome
}));
console.log(funcionarioComId)
