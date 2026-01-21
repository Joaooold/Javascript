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
promise1.then((resultado) => {console.log(resultado)})
promise2.then((resultado) => {console.log(resultado)})
