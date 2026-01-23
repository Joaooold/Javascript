// Exercício 4: Encadeamento de Promises
// Crie duas Promises: uma que seja resolvida para "Olá" após um atraso de 1 segundo e outra que seja
// resolvida para "Mundo" após um atraso de 2 segundos. Encadeie essas Promises usando .then() para imprimir
// "Olá, Mundo" no console

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Olá");
  }, 1000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Mundo");
  }, 2000);
});
promise1.then((resultado) => {
  console.log(resultado);
});
promise2.then((resultado) => {
  console.log(resultado);
});
