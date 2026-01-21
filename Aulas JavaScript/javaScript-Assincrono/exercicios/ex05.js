let promiseErro = new Promise((resolve, reject) => {
  reject("Ocorreu um erro");
});
promiseErro.catch((erro) => {
    console.error(erro)
});
