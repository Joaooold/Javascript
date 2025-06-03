let produtos = {
    nome: "Laptop",
    preço: 2500,
    disponibilidade: true,
}

console.log(Object.keys(produtos)) // propriedades do objeto em lista
console.log(Object.values(produtos)) // valor da propriedade de objeto em lista
console.log(Object.entries(produtos)) // lista contendo lista de propriedades e valores

// Aula 02
Object.assign(produtos, {emEstoque: 20}) // Adicone uma propriedade e valor
console.log(produtos)

Object.defineProperty(produtos, "disponibilidade", {value: false}) // Muda uma propriedade de valor
console.log(produtos)

const origem = {
    nome: "Joao Filho",
    idade: 22
}

const origem2 = {
    profissao: "caminhoneiro",
    cidade: "São Paulo"
}

const destino = {}
Object.assign(destino, origem, origem2) // Cópia para um objeto destino

Object.defineProperty(destino, "salario", { // configuração para acrescentar uma nova propriedade e valor
    value: 3000,
    enumerable: true,
    writable: true,
    configurable: true
})
console.log(destino)