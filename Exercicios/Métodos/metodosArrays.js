let produtos = ["Bola", "Carrinho", "Boneco"]

produtos.push("video game") // adiciona ao final da lista
// console.log(produtos)

produtos.unshift("Cesta") // adiciona ao inicio da lista
console.log(produtos)

produtos.shift()// Retira o primeiro iten da lista
console.log(produtos) 

produtos.pop() // Retira o ultimo iten da lista
console.log(produtos)

// Exemplo 02

let letras = ["f", "h", "d", "e", "c", "a", 'i',"b","g"]
let numeros = [2, 4, 6, 20, 10, 3, 12, 7, 1]

letras.sort() // deixa as coisas de forma ordenada
console.log(letras)

numeros.sort() // Qaundo for numeros ordena de forma diferente
console.log(numeros)

letras.reverse() // Inverte as coisas
console.log(letras)

numeros.reverse()
console.log(numeros)

let concatenaçãoArray = letras.concat(numeros) // Faz a concatenação das variaveis
console.log(concatenaçãoArray)