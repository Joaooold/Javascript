let banco = {
    registro1: {id: 1, nome: "Item1"},
    registro2: {id: 2, nome: "Item2"},
    registro3: {id: 3, nome: "Item3"},
}
function conectarBancoDeDadosFake() {
    try {
        const resultado = banco.registro4
        if(!resultado) {
            throw new Error("Error: Registro não encontrado")
        }
        console.log("Registro encontrado", resultado)
    } catch(erro) {
        console.error(erro.message)
    } finally {
        console.log("conexão foi encerrada")
    }
}
conectarBancoDeDadosFake()