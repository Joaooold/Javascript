// Pergunta 01
let n1 = '150.50'
let n2 = '200px'
let n3 = 'abc'
console.log(Number.parseFloat(n1))
console.log(Number.parseInt(n2)) // usando parseInt ele busca o número dentro da string e tira o resto (px)
console.log(Number(n3)) // Retorna NaN (não é um número) mas o tipo de dado é Number 

// Pergunta 02
let valor1 = "10" 
let valor2 = "20.5"
let resultado = Number.parseFloat(valor1) + Number.parseFloat(valor2)
let resultado2 = parseFloat(valor1) + parseFloat(valor2) // o JS entende que é mesma coisa
console.log(resultado)

// Pergunta 03
let numero1 = 1234.56789
console.log(`Valor formatado: ${numero1.toFixed(2)}`)

// Pergunta 04
let numero2 = 12345.6789
console.log(`Valor com precisão: ${numero2.toPrecision(4)}`)

// Pergunta 05
const entrada = "123abc"
const entradaValida = "123"
const entradaConvertida = Number(entrada)
const entradaValidaConvertida = Number(entradaValida)
console.log(Number.isNaN(entradaConvertida) === false)
console.log(Number.isNaN(entradaConvertida))
console.log(Number.isNaN(entradaValidaConvertida) === false)
