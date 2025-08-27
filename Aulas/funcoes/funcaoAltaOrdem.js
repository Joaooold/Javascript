// Funçoes de alta ordem
// Recebem uma ou mas funções como arumento
// recebem uma função como resultado

function aplicarResultado(x,operaçao) {
    return operaçao(x)

}

function dobra(numero) {
    return numero * 2
}

const resultadoTotal = aplicarResultado(5, dobra)
console.log(resultadoTotal)

// Recebem uma função como resultado
function criarIncrementador(incremento) {
    return function (numero) {
        return numero + incremento
    }
}
const incrementoTotal = criarIncrementador(5)
console.log(incrementoTotal(15))