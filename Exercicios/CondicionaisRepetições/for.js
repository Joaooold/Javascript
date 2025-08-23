let funcionarios =[ 
{
    nome: "João",
    profisssão: "Veterinário",
    sálario: 5500,
    disponibilidade: true,
},
{
    nome: "Jorge",
    profisssão: "Veterinário",
    sálario: 5500,
    disponibilidade: false,
},
{
    nome: "Maria",
    profisssão: "Administradora",
    sálario: 3500,
    disponibilidade: true
},
{
    nome: "Daniel",
    profisssão: "Auxiliar",
    sálario: 1700,
    disponibilidade: false
},
{
    nome: "Gabriela",
    profisssão: "Auxiliar",
    sálario: 1700,
    disponibilidade: true
}
]

// Listar funcionários por profissão
function verificarProfissao(funçao) {
    console.log(`funcionarios na função de ${funçao}`)
    for(let index = 0; index < funcionarios.length; index++) {
        if(funcionarios[index].profisssão === funçao) {
            console.log(funcionarios[index].nome)
        }
    }
}
// verificarProfissao("Veterinário")

// função gasto total do sálario
function totalSalario() {
    let somarSalario = 0
    for(let i = 0;i < funcionarios.length; i++) {
        somarSalario += funcionarios[i].sálario 
    }
    return somarSalario
}
// console.log(totalSalario())

// função contar funcionarios que estão disponiveis
function funcionariosDisponiveis() {
    let disponiveis = 0
    for(let i = 0; i < funcionarios.length; i++) {
        if(funcionarios[i].disponibilidade === false) {
            disponiveis++
        }
    }
    return disponiveis
}
console.log(funcionariosDisponiveis())



