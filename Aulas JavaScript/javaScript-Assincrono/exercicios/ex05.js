// Exercício 5: Tratamento de Erros com Promises
// Crie uma Promise que seja rejeitada com um erro após um atraso de 1 segundo. Use .catch() para lidar com o
// erro e imprimir no console.

let promiseErro = new Promise((resolve, reject) => {
  reject("Ocorreu um erro");
});
promiseErro.catch((erro) => {
    console.error(erro)
});
