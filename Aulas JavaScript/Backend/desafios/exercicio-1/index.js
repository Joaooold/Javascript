// Simular Ambiente
process.env.NODE_ENV = "developmen t";

const operacoes = require("./mathOperations");

const resultado1 = operacoes.add(3, 5);
const resultado2 = operacoes.subtract(20, 5);

console.log(resultado1);
console.log(resultado2);

// Se a função multiply estiver disponivel usea
if (operacoes.multiply) {
  const resultado3 = operacoes.multiply(20,10);
  console.log(resultado3)
}
