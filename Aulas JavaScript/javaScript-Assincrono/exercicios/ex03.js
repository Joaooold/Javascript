let promisse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deu certo na promisse");
  }, 1000);
});

promisse.then((resultado) => {
  console.log(`Resultado: ${resultado}`);
});
