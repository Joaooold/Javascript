let carro = {
    marca: "Toyota",
    modelo: "corrolla",
    ano: 2024,
    cor: "azul",
    airbag: true,
    itens: ["4 portas", "abs", 200]
}

// console.log(carro.modelo)
// console.log(carro.ano)
// console.log(carro.cor)
// console.log(carro.airbag) 
// console.log(carro.itens) 

// console.log(carro["modelo"])
// console.log(carro["itens"])

// Alterando valores do objeto
carro.cor = "vermelho"
carro.airbag = false
carro.itens[2] = 1000 
// acrescentar itens no objeto
carro.kmrodados = 12340

console.log(carro)
