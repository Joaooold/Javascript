/*Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
considerados "truthy".
Função: compararValores
Exemplo Entrada: // compararValores(5, "texto");
// compararValores(0, "texto");
Exemplo Saída: // true
// false */

function compararValores(v1,v2) {
    return Boolean(v1,v2)
}
console.log(compararValores(5, "texto"))