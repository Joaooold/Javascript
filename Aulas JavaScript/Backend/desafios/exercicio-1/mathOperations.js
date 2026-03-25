// função soma
function add(a, b) {
  return a + b;
}

// função subtração
function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// Desafio Extra - Exporta Condicionalmente
if (process.env.NODE_ENV === "development") {
  // função multiplicar
  function multiply(a, b) {
    return a * b;
  }
  module.exports.multiply = multiply
}
