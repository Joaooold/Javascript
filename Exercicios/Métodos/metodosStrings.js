// Metodos strings 

let string = "Olá, Mundo!"

console.log(string.toUpperCase()) // converte para letras maiusculas
console.log(string.toLowerCase()) // converte para letras minusculas

// slice(start, end(opcional))
console.log(string.slice(0, 7))
console.log(string.slice(-6)) // inverte de tras para fente

// substring(start, end(opcional))
console.log(string.substring(3))

// replace(search, replaceWith) - primeiro colocar a palavra que vai ser trocada e depois pelo que
console.log(string.replace("Olá", "Bem Vindo"))
console.log(string.replace("M", "João")) // vai trocar a palavra sempre pela a primeira ocorrência 

// indexOf

console.log(string.indexOf("o")) // Para saber o índice do elemento/palavra

// split(delimiter, limit)
let frutas = "Abacate, banana, pera, morango"
console.log(frutas.split(",")) // Delimitador + limite de elementos da nossa lista
console.log(frutas.split())
let texto = frutas.split(/\s+/) // expressão regular de ignorar os espaços
console.log(texto)