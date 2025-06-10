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
// Pergunta 03
// Pergunta 04
// Pergunta 05