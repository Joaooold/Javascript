// Exercício 7: Async/Await Básico
// Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após
// um atraso de 2 segundos. Imprima os dados buscados no console

const apidados = { nome: "Joao", idade: 23, peso: 80, sexo: "Masculino" };
async function buscarDados() {
  console.log("Buscando dados");

  await tempo(2000);
  console.log(apidados)
  console.log("Dados recebidos")

  console.log("Fim do programa")
}

function tempo(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

buscarDados()
