const usuario = {nome: "João", idade: 22, time: 'Grêmio'}
const mensagem = "Olá torcedor do Corinthias"
const mensagem2 = "Olá torcedor do Flamengo"
const mensagem3 = "Olá torcedor do Vasco"
const mensagem4 = "Olá torcedor do Náutico"
const mensagem5 = "Olá torcedor do Fluminense"
const mensagem6 = "Olá torcedor do Tricolor"
const mensagem7 = "Olá torcedor do Céara"
const mensagemGeral = "Olá amante do esporte"

switch(usuario.time) {
    case 'Corinthians':
        console.log(mensagem)
        break  
    case 'Flamengo':
        console.log(mensagem2)
        break
    case 'Vasco':
        console.log(mensagem3)
        break
    case 'Náutico':
        console.log(mensagem4)
        break
    case 'Fluminense':
        console.log(mensagem5)
        break
    case 'São paulo':
    case 'Grêmio':
        console.log(mensagem6)
        break
    case 'Céara':
        console.log(mensagem7)
        break
    default:
        console.log(mensagemGeral)
}
const mensagemDeEscolha = "Clique no setor para qual deseja comprar seu ingresso!"
const mensagemFinal = 'divirta-se no Estadío!!!'

console.log(mensagemDeEscolha)
console.log(mensagemFinal)
