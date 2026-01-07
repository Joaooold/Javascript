// setTimeout() - função nativa que permite executar um bloco de código depois de um intervalo de tempo determindado (milissegundos).
// Utiliza função callBack
// setTimeout(callBack, tempo)

console.log("Iniciando Programa em...");

setTimeout(function () {
  console.log("1");
}, 1000);
setTimeout(function () {
  console.log("2");
}, 2000);
setTimeout(function () {
  console.log("3");
}, 3000);

setTimeout(function () {
  console.log("Olá, mundo Assíncrono");
}, 4000);

setTimeout(function () {
  console.log("Programa Encerrado");
}, 5000);

