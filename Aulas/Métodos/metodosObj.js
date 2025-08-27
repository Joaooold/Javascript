let produtos = {
    nome: "Laptop",
    preço: 2500,
    disponibilidade: true,
}

console.log(Object.keys(produtos)) // nome de todas as propriedades em lista
console.log(Object.values(produtos)) // valor de todas as propriedades em lista
console.log(Object.entries(produtos)) // lista contendo lista de propriedades e valores

// Aula 02
Object.assign(produtos, {emEstoque: 20}) // Adicone uma propriedade e valor
console.log(produtos)

Object.defineProperty(produtos, "disponibilidade", {value: false}) // Muda o valor de uma propriedade
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
 delete destino.cidade // deleta uma propriedade
console.log(destino)

// Aula 03

const pessoa = {
    nome: "João",
    surf: true,
    falar: function () { console.log("Olá") },
}
const carro = {
    modelo: "Corolla",
    marca: "Toyota"

}
const joao = Object.create(pessoa) // herda as propriedades de um objeto
Object.assign(joao, carro) // Cópia as propriedades para outro objeto
joao.falar()
joao.nome = "João Batista" // Adicionando propriedades para o objeto joao
joao.idade = 22
joao.cidade = "EUA"
console.log(joao.surf, joao.nome)

console.log(joao)
console.log(Object.hasOwn(joao, "nome")) // Verifica se a propriedade existe



