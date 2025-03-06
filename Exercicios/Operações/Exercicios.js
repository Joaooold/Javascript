// Exercicios - Operadores e Operações
// Pergunta 1
let produto = 200;
let desconto = 40;
let imposto = 12;
let preçoFinal = produto - desconto + imposto;
console.log("Preço final do produto: R$" + preçoFinal)

// Pergunta 2
let produto1 = 100;
let lucroAdicional = 30;
let preçoFinal1 = produto1 + lucroAdicional;
console.log("Preço de venda do produto: R$" + preçoFinal1)

// Pergunta 3
// let orçamento = 250
let desconto1 = 50;
let produto2 = 300;
let dentroOrçamento = true;
let final = produto2 - desconto1
console.log("Preço com desconto: R$"+ final, "Está dentro do orçamento: " + dentroOrçamento)

// Pergunta 4
let numero1 = "20";
let numero2 = 20;
let estoqueTotal = numero1 >= numero2;
console.log("A quantidade no estoque é suficiente: "+ estoqueTotal)

// Pergunta 5
let booleano = true;
let quantidadeProduto = 10;
let quantidadeNecessaria = 15;
let quantidadeFalta = quantidadeProduto >= quantidadeNecessaria 
let produtoDisponivel = !booleano
console.log(`O produto está disponivel e tem quantidade suficiente: ${quantidadeFalta}, O produto está indisponível: ${produtoDisponivel}`)
