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
const participantes = numeroDeParticipantes ?? 0;
// console.log(participantes);

// Operador REST
// Junta parâmetros de um funcao
function sum(...parcela) {
  return parcela.reduce((acc, cureentValue) => {
    (acc + cureentValue, 0);
  });
}
console.log(sum(2, 4, 6, 8, 9, 10));

// Operador SPREAD
// Ele permite que você copie ou modifique arrays e objetos de maneira fácil e eficiente.
const objectA = {
  name: "joao",
  sobrenome: "batista",
  id: 1,
};
const listA = [2, 33, 555, 1, 0, 45];

const listB = [...listA];
const objectB = { ...objectA, saldoBancario: "1_000_000_000" };
listB[2] = 1000;

// console.log(listA);
// console.log(listB);
// console.log(objectA);
// console.log(objectB);

// Destructuring
const person = {
  personName: "joao",
  lastName: "Batista",
  age: 23,
  netWorth: 1_000_000,
};
// formas de usar Destructuring
// const { personName, lastName, age, netWorth } = person;
// console.log(`A pessoa ${personName} ${lastName} com a idade de ${age} tem o saldo bancario de ${netWorth}`);

function print({ personName, lastName, age, netWorth }) {
  console.log(`A pessoa ${personName} ${lastName} com a idade de ${age} tem o saldo bancario de ${netWorth}`);
}
print(person);

// Com array
const semestreNotas = [8, 7, 9, 4]
const [primeiraNota, segundaNota, ...rest] = semestreNotas
// Usando o rest para juntar as notas 
console.log(primeiraNota)
console.log(segundaNota)
console.log(...rest)
