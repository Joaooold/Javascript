// Aula 01 - if
const usuario = {nome: "João", idade: 22, Time: 'Flamengo'}
const mensagem = "Olá torcedor do Corinthias"
const mensagem2 = "Olá torcedor do Flamengo"
const mensagem3 = "Olá torcedor do Vasco"
const mensagem4 = "Olá amante do esporte"

if(usuario.Time === "Corinthians") {
    console.log(mensagem)
} else if(usuario.Time === 'Flamengo'){
    console.log(mensagem2)
} else if(usuario.Time === 'Vasco') {
    console.log(mensagem3)
} else {
    console.log(mensagem4)
}


const mensagemDeEscolha = "Clique no setor para qual deseja comprar seu ingresso!"
const mensagemFinal = 'divirta-se no Estadío!!!'

console.log(mensagemDeEscolha)
console.log(mensagemFinal)