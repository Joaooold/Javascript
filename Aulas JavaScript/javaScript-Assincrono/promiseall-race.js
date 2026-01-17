const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primeira promise resolvida");
  }, 1000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Segunda promise resolvida");
  }, 2000);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Terceira promise resolvida");
  }, 3000);
});

// Promise.all - Executa todas as promises e retorna uma unica promise que resolve quando todas as promises no array resolvem
Promise.all([promise1, promise2, promise3])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log("Error:" + erro);
  });

// Promise.race - Executa todas as promises e retorna uma unica promise que resolve ou rejeitar assim que a primeira promise no array resolve ou rejeitar
Promise.race([promise1, promise2, promise3]).then((resultado) => {
    console.log(resultado)
});
