// Cidadão de primeira classe = funções armazenadas dentro de variáveis, funções callBack, funções retornadas por outras

// function anonima
let funcaoArmazenada = function () {
  console.log("Ola mundo esta é uma função armazenada dentro de uma variavel");
};
funcaoArmazenada();

// function nomeada
let soma = function somaTotal(a, b) {
  console.log(a + b);
};
soma(5, 5);

// arrow function
let mutiplicar = (a, b) => {
  console.log(a * b);
};
mutiplicar(10, 5);

// setTimeOut()
setTimeout(function () {
  mutiplicar(5, 5);
}, 5000);

setTimeout(function () {
  mutiplicar(5, 9);
}, 3000);

setTimeout(function () {
  mutiplicar(5, 3);
}, 1000);

setTimeout(function () {
  soma(30, 30);
}, 9000);

setTimeout(function () {
  soma(100, 30);
}, 10000);
