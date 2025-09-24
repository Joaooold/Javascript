// 1 a 4 metodos personalizados
// Pergunta 01 
const venda = {
    produto: "PC",
    quantidade: 3,
    preçoUnitario: 2000,
    desconto: 50,
    CalcularTotal: function() {
        const total = this.quantidade * this.preçoUnitario
        return total - (total * (this.desconto / 100))
    }
}
// console.log(venda.CalcularTotal())

// Pergunta 02
venda.aplicarDesconto = function(percentual) {
    this.desconto = percentual
}
venda.aplicarDesconto(20)
// console.log(`O desconto foi de ${venda.desconto}%, venda foi de ${venda.CalcularTotal()}`)

// Pergunta 03
venda.mundarQuantidade = function(novaQuantidade) {
    this.quantidade = novaQuantidade
}
venda.mundarQuantidade(6)
// console.log(`A quantidade foi de ${venda.quantidade}, venda foi de ${venda.CalcularTotal()}`)

// Pergunta 04
venda.verificarEstoque = function(estoqueDisponivel) {
    return `verificação concluida: ${this.quantidade <= estoqueDisponivel}`
}
// console.log(venda.verificarEstoque(7))
// console.log(venda)

// Pergunta 05 
const entradas = Object.entries(venda)
// console.log(entradas)

// Pergunta 06
const valores = Object.values(venda)
// console.log(valores)

// Pergunta 07
const propriedades = Object.keys(venda)
// console.log(propriedades)

// Pergunta 08
const verificar = Object.hasOwn(venda, "desconto")
// console.log(verificar)

// Pergunta 09
const novaVenda = {}
Object.assign(novaVenda,venda )
Object.defineProperty(novaVenda, "produto", {value: "Televisão"})
Object.defineProperty(novaVenda, "quantidade", {value: 10})
console.log(novaVenda)

// Pergunta 10
Object.defineProperty(venda, "Data", {value:"12/06/2025", enumerable: false})
console.log(venda.Data) // Propriedade data esta oculta em venda

// Pergunta 11
const descontoEspecial = Object.create(venda)
descontoEspecial.desconto = 20  
console.log(descontoEspecial)
// Pergunta 12

delete venda.desconto;
console.log(Object.keys(venda))