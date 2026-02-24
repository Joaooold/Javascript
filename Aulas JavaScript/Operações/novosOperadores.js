// Optional Chaining
const pessoa = {
  nome: "joao",
  sobrenome: "Batista",
  idade: 23,
  mae: {
    nome: "maria",
    sobrenome: "Lucelia",
    idade: 50,
  },
};
// console.log(pessoa?.mae?.nome)
// Escrito de forma diferente abaixo
// if (pessoa?.mae?.nome) {
//   console.log(pessoa.mae.nome);
// } else {
//   console.error("Oque voce quer nao foi encontrado");
// }

// Operador de coalescência nula
const numeroDeParticipantes = null;
const participantes = numeroDeParticipantes ??  0;
console.log(participantes)
