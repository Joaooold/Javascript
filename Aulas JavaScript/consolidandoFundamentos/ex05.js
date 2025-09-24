/*Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array
contendo as palavras que compõem essa frase, separadas por espaços.
Função: dividirFrase
Exemplo Entrada: // dividirFrase("Esta é uma frase de exemplo.");
Exemplo Saída: // ["Esta", "é", "uma", "frase", "de", "exemplo."]
 */
    let frase = "Esta é uma frase de exemplo."
function dividirFrase(texto) {
    let dividir = frase.split(" ")
    return dividir
}
console.log(dividirFrase(frase))