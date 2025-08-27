// retorno de uma função

let pedido = {
    id: 1234,
    nome: "João Batista",
    email: "joao.1@hotmail.com",
    lanche: 12,
    batatafrita: 5,
    suco: 4
}

function somaPedido() {
    let soma = pedido.lanche + pedido.batatafrita + pedido.suco
    return soma

}

console.log(somaPedido())