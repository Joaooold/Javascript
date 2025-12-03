function tratarErroPropriedadeVazia() {
    try {
        const objeto = {}
        console.log(objeto.propriedade.valor)
    } catch(erro) {
        console.error("O valor da propriedade é: " ,erro)
    }
}
tratarErroPropriedadeVazia()