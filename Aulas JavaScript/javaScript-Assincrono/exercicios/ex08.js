// exercício 8: Tratamento de Erros com Async/Await
// Escreva uma função assíncrona obterDados que usa await para buscar dados de uma API após um atraso de 1
// segundo. Se ocorrer um erro, capture-o e imprima uma mensagem de erro no console.

const apidados = { nome: "Joao", idade: 23, peso: 80, sexo: "Masculino" };
async function buscarDados() {
 try {
     console.log("Buscando dados");

  await tempo(1000);
  console.log(aidados)
  console.log("Dados recebidos")

  console.log("Fim do programa")
 } catch(erro) {
    console.error("Algo deu errado!", erro)
 }
}

function tempo(ms) {
  return new Promise((resolve,) => {
    setTimeout(resolve, ms);
  });
}

buscarDados()