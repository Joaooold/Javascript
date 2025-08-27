const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  peças: {
    portas: 4,
    airbag: true,
    pneus: "sistema abs",
  },
};
// for(variavel in objeto) {}
for (info in carro) {
  console.log(`${info}: ${carro[info]}`);
}

// for(variavel of array) {} pega os valores do array (usando o for(in) pega os indice do array)
const nomes = ["Gabriel", "João", "Felipe", "Luiza", "Fernanda", "Mario"];

for(nomePessoa of nomes) {
  console.log(nomePessoa)
}

for(nomePessoa in nomes) {
  console.log(nomePessoa)
}
