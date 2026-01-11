let minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true;
  if (sucesso) {
    resolve("Sua operação foi um sucesso!");
  } else {
    reject("Houve um erro na operação");
  }
});
minhaPromise
  .then((resultado) => {
    console.log(`${resultado}: deu certo na operação`);
  })
  .catch((erro) => {
    console.error(`${erro}: algo deu errado na operação`);
  })
  .finally(() => {
    console.log("Operação foi finalizada");
  });

function minhaOperacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random() > 0.5; // 50% sucesso

      if (sucesso) {
        resolve("Sua operação foi um sucesso");
      } else {
        reject("Houve um erro na operação");
      }
    }, 2000);
  });
}
minhaOperacaoAssincrona()
  .then((resultado) => {
    console.log(resultado + ": Operação foi um sucesso na função Assincrona");
  })
  .catch((erro) => {
    console.error(erro + ": Ocorreu um erro na função Assincrona");
  })
  .finally(() => {
    console.log("Operação foi finalizada");
  });
