/*Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
indicando se o número é primo.
Função: ehPrimo
Exemplo Entrada: // ehPrimo(7);
// ehPrimo(4);
Exemplo Saída: // true
// false */

function ehPrimo(num) {
  if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Se num é divisível por i, não é primo
  }
  return true; // Se não encontrou divisores, é primo
}

console.log(ehPrimo(11));
console.log(ehPrimo(8));
