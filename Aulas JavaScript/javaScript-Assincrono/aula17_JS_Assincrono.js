const minhaPromise = new Promise((resolve, reject) => {
  // Operação assíncrona
  let sucesso = true; // Simulando sucesso ou falha
  if (sucesso) {
    resolve("A operação foi bem-sucedida!");
  } else {
    reject("Houve um erro na operação.");
  }
});

// Usando async/await com a Promise
async function executarPromise() {
  try {
    const mensagem = await minhaPromise;
    console.log(mensagem);
  } catch (erro) {
    console.error(erro);
  }
}

executarPromise();

//Encadeamento de Promises (then e catch): - Simples / operação unica

minhaPromise
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Usando async/await com try/catch para encadeamento de Promises;
async function executarPromiseEncadeada() {
  try {
    const mensagem = await minhaPromise;
    console.log(mensagem);
  } catch (erro) {
    console.error(erro);
  }
}

executarPromiseEncadeada();

//Encadeamento de Múltiplas Operações:

minhaPromise
  .then((mensagem) => {
    console.log(mensagem);
    return "Próxima operação bem-sucedida!";
  })
  .then((novaMensagem) => {
    console.log(novaMensagem);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });

// Usando async/await para encadeamento de múltiplas operações
async function executarMultiplasOperacoes() {
  try {
    const mensagem = await minhaPromise;
    console.log(mensagem);
    const novaMensagem = "Próxima operação bem-sucedida!";
    console.log(novaMensagem);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executarMultiplasOperacoes();

//Exemplo com Múltiplas Operações Assíncronas:

function operacao1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Operação 1 concluída"), 1000);
  });
}

function operacao2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Operação 2 concluída"), 1000);
  });
}

operacao1()
  .then((mensagem1) => {
    console.log(mensagem1);
    return operacao2();
  })
  .then((mensagem2) => {
    console.log(mensagem2);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Usando async/await com múltiplas operações assíncronas
async function executarOperacoes() {
  try {
    const mensagem1 = await operacao1();
    console.log(mensagem1);
    const mensagem2 = await operacao2();
    console.log(mensagem2);
  } catch (erro) {
    console.error(erro);
  }
}

executarOperacoes();

//Função com Encadeamento de Operações Assíncronas: - Promises
function operacaoEncadeada() {
  return operacao1()
    .then(() => operacao2())
    .then(() => {
      console.log("Todas as operações concluídas");
    });;
    
}

// Usando async/await para encadear operações assíncronas
async function executarOperacaoEncadeada() {
  try {
    await operacao1();
    await operacao2();
    console.log("Todas as operações concluídas");
  } catch (erro) {
    console.error(erro);
  }
}

executarOperacaoEncadeada();
