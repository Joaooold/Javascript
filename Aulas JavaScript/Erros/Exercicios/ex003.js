function tratarErroAcessarPropriedade() {
    try {
        // const objeto = {propriedade: "valor"}
        const objeto = null
        console.log(objeto.propriedade)
    } catch(erro) {
        console.error("Ocorreu um erro: ",erro)
    }
}
tratarErroAcessarPropriedade()