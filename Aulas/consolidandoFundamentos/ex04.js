/*Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o
rendimento obtido com esse investimento.
Função: calcularRendimento
Exemplo Entrada: //calcularRendimento(1000, 5);
Exemplo Saída: // 50 */

function calcularRendimento(valoInvestido,taxaDeJuros) {
    let rendimento = valoInvestido * (taxaDeJuros / 100)
    return rendimento
}
console.log(calcularRendimento(1000, 5))