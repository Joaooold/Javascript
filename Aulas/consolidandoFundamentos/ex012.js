/*Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que
ela contém.
Função: contarPalavras
Exemplo Entrada: // contarPalavras("Olá, tudo bem?");
Exemplo Saída: // 3 */

function contarPalavras(frase) {
  let fraseCortada = frase.split(" ");
  return fraseCortada.length;
}
console.log(contarPalavras("Olá, estar tudo bem com você"));
