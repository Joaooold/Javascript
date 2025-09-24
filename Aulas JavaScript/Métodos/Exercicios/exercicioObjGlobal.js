// Pergunta 01
// let numero = 7.89
function arredondar(n1) {
return `Valor arredondado para baixo: ${Math.floor(n1)}
Valor arredondado para cima: ${Math.ceil(n1)}
Arredondado para o valor mais próximo: ${Math.round(n1)}`
}
// console.log(arredondar(7.89))

// Pergunta 02
let listaNumeros = [10, 5, 20, 40, 1, 7]
function lista() {

    return `Valor mínimo: ${Math.min(...listaNumeros)}
Valor maxímo: ${Math.max(...listaNumeros)}`
}

// console.log(lista())

// Pergunta 03
function numerosAleatorios(min,max) {
    return `Aleatório entre 0 e 1: ${Math.random()}
Aleatório entre 0 e 100: ${Math.random() * 100}
Aleatório entre ${min} e ${max}: ${Math.random() * (max - min) + min}`

 }
//  console.log(numerosAleatorios(50,100))

// Pergunta 04
//fazendo em arrow function
const calcularDiferençaEmdias = (dataInicial, dataFinal) => { 
    let diferencaEmMilissegundos = new Date(dataFinal) - new Date(dataInicial)
    let diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
    // Calculo para transformar milissegundos
    // 1000 millisegundos, 60 segundos, 60 minutos, 24 horas
    console.log(`A diferença em dias é: ${diferencaEmDias}`)
}
// calcularDiferençaEmdias("2024-01-01", "2024-10-30")

// Pergunta 05
const extrairDatas = (AnoMesDia) => {
    const dataTotal = new Date(AnoMesDia)
    return console.log(`Ano: ${dataTotal.getFullYear()}, Mês: ${dataTotal.getMonth() + 1}, Dia: ${dataTotal.getUTCDate()}`)
}

// extrairDatas("2024-10-07")

// Pergunta 06
let dataNascimento = "1990-05-15"

function calcularIdade(dataNascimento) {
    const nascimento = new Date(dataNascimento)
    const hoje = new Date()
    // Calcular idade com base na diferença de anos
    let idade = hoje.getFullYear() - nascimento.getFullYear()

    // Criar a data aniversario atual ano
    let aniversarioAtual = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) //ANO,MÊS,DIA
    
    // Calcular diferenças em milissegundos e converter em dias
    let diferencaDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24)

    // Ajuste de idade
    let ajuste = (diferencaDias < 0 ) * 1

    idade = idade - ajuste
    console.log(`Minha idade é: ${idade}`)    
}
// calcularIdade(dataNascimento)

// Desafio 01
// Mudar a data para formato brasileiro
function alterarData(data) {
    const dataUTC = new Date(data)
    const dataformatadaBR = dataUTC.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    
        console.log(dataformatadaBR)
}
alterarData("2020-12-10")
