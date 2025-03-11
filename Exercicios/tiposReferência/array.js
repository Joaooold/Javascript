// Arrays

let lista = ["bolo", 20, true, "doce"] // Indice = [0, 1, 2, 3] / Ex: console.log(lista[0])

lista[3] = "cachorro" // trocando valor da lista

console.log(lista)

////////////////////////////////////////////////////

let lista2 = ["monitor", "mouse", "teclado"]
console.log(lista2)

lista2[4] = "wbecan" 
console.log(lista2)

console.log(lista2.length)

// lista2.length = lista2.length - 1
// console.log(lista2)

////////////////////////////////////////////////////////////
let matrizVendas = [
    [100, 200, 300],
    [400, 500, 60], // loja B
    [700, 800, 900]
]
console.log(matrizVendas)

matrizVendas[1][2] = 666
console.log(matrizVendas[1])

let vendasLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2]
console.log(vendasLojaB)