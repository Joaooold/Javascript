function enviarMensagen() {
    console.log("Bem vindo ao nosso site por favor se cadraste")
}
// enviarMensagen()

function cadrastar(nome, sobrenome) {
    console.log(`muito obrigado ${nome} ${sobrenome} por se cadrastar`)
}

// cadrastar("João", "Batista")

function banco(deposito, saque) {
    let saldo = deposito - saque
    return saldo
    // console.log(`O seu saldo no banco é de ${saldo}`)
}
// saldo(500, 600)

function main() {
    enviarMensagen()
    cadrastar("João", "Batista")
    let saldo = banco(500, 100)
    console.log(`O seu saldo é de ${saldo}`)
}
main()