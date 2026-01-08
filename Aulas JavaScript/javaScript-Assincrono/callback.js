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

operacaoComErro(callbackErroOuSucesso);
