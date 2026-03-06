// shallow copy - copia superficial
// Objeto original
const produto = {
  nome: "Caderno",
  preco: 15.5,
  categoria: "Papelaria",
};
// Objeto cópia
const produto2 = { ...produto };
produto2.nome = "Agenda"
console.log('Objeto original:', produto)
console.log('Objeto copia:', produto2)

// Deep copy - copia profunda
const produto3 = JSON.parse(JSON.stringify(produto))
console.log('copia profunda do produto', produto3)
produto3.preco = 50
console.log('copia profunda do produto', produto3)

// shallow&deep freezing - 
const originalFinanceiro = {
  mes: "Janeiro",
  resceitas: 10000,
  despesas: 7000,
  detalhes: {
    clientesAtendidos: 50,
    filial: "Centro"
  }
}
// shallow freezing - congelamento superficial
Object.freeze(originalFinanceiro) // usando este metodo so congela o nivel 1
originalFinanceiro.mes = "Fevereiro"
originalFinanceiro.detalhes.filial = "Zona norte"
console.log(originalFinanceiro)

// Deep freezing - congelamento profundo - precisa de uma função
function deepFreze(objeto) {
  Object.keys(objeto).forEach((key) => {
    if(typeof objeto[key] === "object" && objeto[key] !== null) {
      deepFreze(objeto[key]) // detalhes
    }
  })
  return Object.freeze(objeto)
}
console.log(deepFreze(originalFinanceiro))




