// Simulador aplicativo de corrida
let nome = "João"
let partida = "Avenida Paulista"
let destino = 'Parque Ibirapuera'

function resgistrar(nome) {
    while(true) {
        if(nome === "") {
            console.log("Preencha seu nome")
            break
        } else if(typeof nome !== "string") {
            console.log("Nome inválido, preencha novamente")
            break
        } else {
            console.log(`Usuário ${nome} registrado com sucesso!`)
            break
        }
    }
}
resgistrar(nome)


function selecionar(partida, destino) {
    console.log("Selecione sua partida e destino")

    while(partida !== destino) {
        if(partida === "" || typeof partida !== "string") {
            console.log("Local de partida precisa ser informado")
            break
        } else if(destino === "" || typeof destino !== "string") {
            console.log("Destino inválido. Digite o destino correto ")
            break
        } else {
            console.log("Corrida confirmada!")
            break
        }
    }
}
selecionar(partida, destino)