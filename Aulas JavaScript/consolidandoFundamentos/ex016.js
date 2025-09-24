/*Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
decodifique a frase, revertendo as substituições.
Funções: codificar e decodificar
Exemplo Entrada: // const frase = "a casa e o sol";
const resultado = codificar(frase);
const frase2 = "1 c1s2 2 4 s4l";
const resultado2 = decodificar(frase2);
Exemplo Saída: // "1 c1s2 2 4 s4l"
// "a casa e o sol" */
const frase = "a casa e o sol";
const frase2 = "1 c1s2 2 4 s4l";
function codificar(frase) {
  // Usando replace() para trocar as vogais por numeros e expressao regular para tocar todas as ocorrencias(/?/g)
  return frase.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
}
function decodificar(frase2) {
  return frase2.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
}

console.log(codificar(frase));
console.log(decodificar(frase2));
