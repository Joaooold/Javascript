// Exercício 3: Conceitos Básicos de Promises
// Crie uma nova Promise que seja resolvida após um atraso de 1 segundo e retorne a string "Promise
// resolvida". Use .then() para lidar com o valor resolvido e imprimir no console.

let promisse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deu certo na promisse");
  }, 1000);
});

promisse.then((resultado) => {
  console.log(`Resultado: ${resultado}`);
});
