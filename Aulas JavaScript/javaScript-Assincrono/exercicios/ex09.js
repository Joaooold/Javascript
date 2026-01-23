// Exercício 9: Async/Await com Promise.all()
// Escreva uma função assíncrona buscarMultiplosDados que usa Promise.all() e await para buscar dados de
// várias APIs simultaneamente. Imprima o array de dados buscados no console.

function api1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nome: "Produto A" });
    }, 1000);
  });
}

function api2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, nome: "Produto B" });
    }, 2000);
  });
}

function api3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 3, nome: "Produto C" });
    }, 1500);
  });
}

// Função assíncrona que busca dados de várias "APIs"
async function buscarMultiplosDados() {
  try {
    // Usando Promise.all para buscar dados simultaneamente
    const dados = await Promise.all([api1(), api2(), api3()]);

    // Imprimindo os dados buscados no console
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

buscarMultiplosDados();
