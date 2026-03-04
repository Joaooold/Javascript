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

// shallow&deep copy - aninhamento
const originalFinanceiro = {
  mes: "Janeiro",
  resceitas: 10000,
  despesas: 7000,
  detalhes: {
    clientesAtendidos: 50,
    filial: "Centro"
  }
}


