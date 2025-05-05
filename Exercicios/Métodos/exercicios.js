// Pergunta 01
let texto = "javascript é divertido"
console.log(texto.replace("javascript", "JAVASCRIPT"))

// Pergunta 02
let frase = "Aprendendo JavaScript"
console.log(frase.substring(0,10).toLowerCase())

// Pergunta 03
let texto1 = "Aprendendo Python"
console.log(texto1.replace("Python", "JavaScript"))

// Pergunta 04
let objetos = "cadeira, mesa, sofá, armário"
let array = objetos.split(", ")
console.log(array)

array.splice(array.indexOf("sofá"), 1);
console.log(array)