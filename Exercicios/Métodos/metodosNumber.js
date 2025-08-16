// Aula 1
let numeroInteiro = 432
let numeorPontoFlutuante = 2.358
let numeorPontoFlutuante2 = 2.567

// Verifica se o valor é inteiro ou não - booleano
console.log(Number.isInteger(numeroInteiro))
console.log(Number.isInteger(numeorPontoFlutuante))

// Formata os números de acordo com as casas decimais 
console.log(numeorPontoFlutuante.toFixed(2))
console.log(numeorPontoFlutuante2.toFixed(2))
console.log(numeroInteiro.toFixed(2))

// Número de digitos que o numeral irá conter
console.log(numeorPontoFlutuante.toPrecision(4))
console.log(numeroInteiro.toPrecision(1)) // 4e+2 é a mesma coisa que 400

///////////////////////////////////////////////////////////////////////////////
console.log("Aula 2 //////////////////////////////////////////")
let flutuanteString = "32.567"
let inteiroString = "42"

console.log(typeof flutuanteString)

// Converte um valor geralmente String para Number 
// Use typeof para ver o tipo primitivo
console.log(Number.parseFloat(flutuanteString))
console.log(Number.parseFloat(inteiroString))

// converte um inteiro para String - opcional - base númerica
let numero = 22
console.log( numero.toString())
console.log( numero.toString(10)) // base decimal
console.log( numero.toString(2)) // Base bínaria
console.log( numero.toString(8)) // Base octal
// 2 a 36

// Converta uma String para um numero inteiro, considerando a base númerica (opcional)
console.log(Number.parseInt(flutuanteString))
console.log(Number.parseInt(flutuanteString, 5))
