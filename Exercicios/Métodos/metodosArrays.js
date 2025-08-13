// Aula 01

let produtos = ["Bola", "Carrinho", "Boneco"]

produtos.push("video game") // adiciona ao final da lista
// console.log(produtos)

produtos.unshift("Cesta") // adiciona ao inicio da lista
console.log(produtos)

produtos.shift()// Retira o primeiro iten da lista
console.log(produtos) 

produtos.pop() // Retira o ultimo iten da lista
console.log(produtos)

// Aula 02

let letras = ["f", "h", "d", "e", "c", "a", 'i',"b","g"]
let numeros = [2, 4, 6, 20, 10, 3, 12, 7, 1]

letras.sort() // deixa as coisas de forma ordenada
console.log(letras)

numeros.sort() // Quando for numeros ordena de forma diferente
console.log(numeros)

letras.reverse() // Inverte as coisas
console.log(letras)

numeros.reverse()
console.log(numeros)

let concatenaçãoArray = letras.concat(numeros) // Faz a concatenação das lista
console.log(concatenaçãoArray)

// Aula 03

let frutas = ["maçã", "laranja", "melancia"]
console.log(frutas.indexOf("laranja")) // Verifica a posição do elemento

// frutas.splice(0, 1) splice(inicio, quantidade de elementos)


frutas.splice(0, 2, 10) // splice(inicio, quantidade de elementos, valor substituido)
console.log(frutas)

// Aula 04

let frutas02 = ["mamão", "manga", "melão", "kiwi"]

console.log(frutas02.includes("melão")) // Verifica se este elemento existe

console.log(frutas02.every(
    function(fruta) {
        return fruta.includes("m")
    }
)) // verifica se todos os elementos tem uma coisa em comun 

console.log(frutas02.some(
    function(fruta) {
        return fruta.includes("k")
    }
)) // Verifica se pelo menos um elemento esta certo

console.log(frutas02.join(" - ")) // Transforma os elemento em uma string