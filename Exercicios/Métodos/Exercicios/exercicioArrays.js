// Pergunta 01
let produtos01 = ["bola", "video game"]
produtos01.shift()
produtos01.push("Computador")
console.log(produtos01)

// Pergunta 02
let produtos02 = ["Janela", "Mesa"]
produtos02.push("Panela")
let junçaoProdutos = produtos02.concat(produtos01)
console.log(junçaoProdutos)

// Pergunta 03
let produtos03 = ["lápis", "Caderno", "Estojo"]
console.log(produtos03.includes("lápis"))
console.log(produtos03.includes("agenda"))

// Pergunta 04
let numeros = [2, 5, 8, 1]
let numeroSome = numeros.some((numero => numero > 7))
console.log("Resultado:",numeroSome)

// Pergunta 05
let numeros2 = [4, 6, 8, 2]
let numerosEvery = numeros2.every((numero => numero > 3))
console.log("Resultado:",numerosEvery)
