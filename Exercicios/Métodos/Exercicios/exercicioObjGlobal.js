// Pergunta 01
// let numero = 7.89
function arredondar(n1) {
    return `Valor arredondado para baixo: ${parseInt(n1)}
Valor arredondado para cima: ${Math.round(n1)}
Arredondado para o valor mais próximo: ${Math.round(n1)}`
}
console.log(arredondar(7.89))

// Pergunta 02
let listaNumeros = [10, 5, 20, 40, 1, 7]
function lista() {

    return `Valor mínimo: ${Math.min(...listaNumeros)}
Valor maxímo: ${Math.max(...listaNumeros)}`
}

console.log(lista())

// Pergunta 03
function numerosAleatorios(min,max) {
    return `Aleatório entre 0 e 1: ${Math.random()}
Aleatório entre 0 e 100: ${Math.random() * 100}
Aleatório entre ${min} e ${max}: ${Math.random() * (max - min) + min}`

 }
 console.log(numerosAleatorios(50,100))

// Pergunta 04
let Data = new Dat()
function dataDiferença() {

}