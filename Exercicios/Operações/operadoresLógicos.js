let idade = 30
let idade2 = 15
let codigoPromocional = true

// && (AND) Ambas condições são verdadeiras
let codigo1 = idade >= 20 && codigoPromocional; // TRUE
console.log(codigo1)

let codigo2 = idade2 >= 20 && codigoPromocional; // FALSE
console.log(codigo2)

// || (OR) Apenas uma condição é verdadeira
let promocional = true
let codigo3 = idade2 >= 20 || promocional; //true
console.log(codigo3)

// ! (NOT) Inverte o valor Booleano
let promoção = true
let alerta = !promoção
console.log(alerta)