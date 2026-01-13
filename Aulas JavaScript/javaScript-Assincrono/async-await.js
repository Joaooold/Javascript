// Sintaxe: async function blabla() {... await(espera um promise ser resolvida)... }

async function exemplo() {
  console.log("Iniciamos o programa");

  await esperar(2000);
  console.log("Dado 1 recebido pode continuar o programa");

  await esperar(1000);
  console.log("Dado 1 recebido - agora recebi o dado 2");

  console.log("Fim do programa")
}

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

exemplo()
