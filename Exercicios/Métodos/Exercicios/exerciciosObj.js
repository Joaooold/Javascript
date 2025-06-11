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
console.log(venda.CalcularTotal())

// Pergunta 02
venda.aplicarDesconto = function(percentual) {
    this.desconto = percentual
}
venda.aplicarDesconto(20)
console.log(`O desconto foi de ${venda.desconto}%, venda foi de ${venda.CalcularTotal()}`)

// Pergunta 03
venda.mundarQuantidade = function(novaQuantidade) {
    this.quantidade = novaQuantidade
}
venda.mundarQuantidade(6)
console.log(`A quantidade foi de ${venda.quantidade}, venda foi de ${venda.CalcularTotal()}`)
// Pergunta 04
// Pergunta 05