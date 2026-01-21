// Função que simula operação Assincrona
function operacaoAssincrona(callback) {
  setTimeout(() => {
    console.log("Operação concluida");
    // Chamando callback e passando os dados para ele
    callback("Dados da operação");
  }, 2000);
}

// Função callback que sera chamada quando a operação for concluida

function meuCallbackDados(dados) {
  console.log(`Recebido no callback: ${dados}`);
}

operacaoAssincrona(meuCallbackDados);

///////////////////////////////////////////////////////////////////

function operacaoComErro(funcaoCallback) {
  const chanceDesucesso = Math.random() > 0.5; // simlar 50% chance de erro
  console.log(chanceDesucesso);
  setTimeout(() => {
    if (chanceDesucesso) {
      funcaoCallback(null, "Operação Bem-sucedida!!");
    } else {
      funcaoCallback("Houve um erro na operação", null);
    }
  }, 2000);
}
// função callback para simular erro e sucesso

function callbackErroOuSucesso(erro, resultado) {
  if (erro) {
    console.log("Erro:", erro); // gera erro
  } else {
    console.log("Resultado:", resultado); // gera sucesso
  }
}

// operacaoComErro(callbackErroOuSucesso);

async function tarefa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 1 concluída!");
      resolve();
    }, 1000);
  });
}
async function tarefa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 2 concluída!");
      resolve();
    }, 1000);
  });
}
async function tarefa3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 3 concluída!");
      resolve();
    }, 1000);
  });
}

// Resolução de async/await
async function realizarFuncoes() {
  await tarefa1()
  await tarefa2()
  await tarefa3()
}

// realizarFuncoes()

// Resolução de promises
// tarefa1()
//   .then(() => tarefa2())
//   .then(() => tarefa3())
//   .then(() => console.log("Todas as tarefas foram concluídas"));


  // Encadeamento com callbacks
// tarefa1(function () {
//   tarefa2(function () {
//     tarefa3(function () {
//       console.log("Todas as tarefas foram concluídas");
//     });
//   });
// });
