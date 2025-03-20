// Pergunta 1 Array
let Produto = ["Placa de video", "Mouse", "PC"]
console.log(Produto[1])
Produto[2] = "Notebook"
console.log(Produto)

// Pergunta 2 Array
let Clientes = ["João", "Luiza", "Lucelia"]
Clientes[3] = "Batista"
Clientes.length = Clientes.length - 1
console.log(Clientes)

// Pergunta 3 Object
let ProdutoOBJ = {
    nome: "Macarrão",
    preco: 15,
    Quantidade: 10,
}
// console.log(ProdutoOBJ.nome)
 ProdutoOBJ.preco = 25
console.log(ProdutoOBJ.preco)

// Pergunta 4 
let venda = {
    cliente: "João",
    valor: 15000,
    produto: "carro",
}
venda.data = "12/02/2023"

delete venda.produto

console.log(venda)

// Pergunta 4 tipos de Referência

let estoque = ["arroz", "feijao", "bolo"]
let novoEstoque = [...estoque]

novoEstoque[2] = "Macarrão"
console.log(novoEstoque)
console.log(estoque)

let funcionario = {nome1:"João", nome2:"Luiza", nome3:"Lucelia" }
let novoFuncionario = {...funcionario}

novoFuncionario.nome2 = "lucas"
console.log(funcionario)
console.log(novoFuncionario)



