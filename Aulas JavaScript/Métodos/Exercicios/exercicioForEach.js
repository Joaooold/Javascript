const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];
// Exercício 1: Você possui uma lista de pacotes de viagem que contém informações sobre o
// destino e o preço. Utilize o forEach para percorrer essa lista e exibir no terminal o nome de
// cada destino acompanhado do seu respectivo preço.
pacotes.forEach((pacote) => console.log(`Destino: ${pacote.destino}, Preço: ${pacote.preco}R$`));

// Exercício 2: Você precisa informar a disponibilidade de vagas para cada pacote. Para isso,
// utilize o forEach para percorrer a mesma lista e exibir no terminal o nome de cada destino,
// seguido da informação de se há vagas disponíveis ou se estão esgotadas.
console.log("\n---------------------------------");
pacotes.forEach((pacote) => {
  const disponibilidade = pacote.vagasDisponiveis ? "Vagas Disponiveis" : "Vagas Esgotadas";

  console.log(`${pacote.destino} - ${disponibilidade}`);
});

// Exercício 3: Conte quantos destinos têm vagas disponíveis. Utilize o forEach para verificar a
// disponibilidade de cada pacote e armazene a contagem. Exiba no terminal o total de destinos e
// quais destinos possuem vagas disponíveis.
console.log("\n----------------------------------");
let destinoComVagas = 0;
let destinoDisponiveis = [];
pacotes.forEach((pacote) => {
  if (pacote.vagasDisponiveis) {
    destinoComVagas++;
    destinoDisponiveis.push(pacote.destino);
  }
});
console.log(`Destino com vagas disponiveis: ${destinoComVagas}`)
console.log(`Destino: ${destinoDisponiveis.join(", ")}`)