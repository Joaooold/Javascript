// Exercício 6: Promise All
// Crie três Promises: uma que seja resolvida para "Um" após um atraso de 1 segundo, outra que seja resolvida
// para "Dois" após um atraso de 2 segundos e uma terceira que seja resolvida para "Três" após um atraso de 3
// segundos. Use Promise.all() para aguardar a resolução de todas as Promises e, em seguida, imprima o array
// de valores resolvidos no console.
let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Um");
  }, 1000);
});
let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dois");
  }, 2000);
});
let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Três");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((resultado) => {
  console.log(resultado);
});
