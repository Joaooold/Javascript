/*Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
palavra é um palíndromo.
Função: ehPalindromo
Exemplo Entrada: // ehPalindromo("arara");
// ehPalindromo("cachorro");
Exemplo Saída: // true
// false */

function ehPalidromo(animal) {
  let verificaçãoDePalidromo = animal;
  if (verificaçãoDePalidromo.split("").reverse().join("") === animal) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalidromo("revi"));
