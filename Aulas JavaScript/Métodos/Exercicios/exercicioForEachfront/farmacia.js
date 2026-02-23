const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxilina", estoque: 0, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 0, preco: 7.8 },
];
// Exercício 4: Atualizando Estoque de Produtos
// ❖ Estruture sua página HTML com uma lista não ordenada onde os medicamentos serão
// exibidos.
// ❖ Utilize o forEach para iterar sobre o array de medicamentos.
// ❖ Paracada medicamento, adicione um item à lista que mostre o nome do medicamento e
// a quantidade em estoque.
const listaMedicamentos = document.getElementById("lista-medicamentos");
medicamentos.forEach((medicamento) => {
  const li = document.createElement("li");
  li.textContent = `${medicamento.nome} - Estoque ${medicamento.estoque}`;
  listaMedicamentos.appendChild(li);
});

// Exercício 5: Exibindo Preços dos Medicamentos
// ❖ Adicione uma nova lista não ordenada à sua página HTML para exibir os preços.
// ❖ Utilize o forEach para percorrer o array de medicamentos novamente.
// ❖ Paracada medicamento, adicione um item à nova lista que mostre o nome do
// medicamento e seu preço.
const listaPreco = document.getElementById("preco-medicamentos");
medicamentos.forEach((medicamento) => {
  const li = document.createElement("li");
  li.textContent = `${medicamento.nome} - R$${medicamento.preco.toFixed(2)}`;
  listaPreco.appendChild(li);
});

// Exercício 6: Exibindo Medicamentos em falta
// ❖ Crieumespaço na sua página HTML onde os nomes dos medicamentos em falta serão
// exibidos.
// ❖ Utilize o forEach para iterar sobre o array de medicamentos.
// ❖ Paracada medicamento, verifique se o estoque está zerado e, se estiver, armazene o
// nome do medicamento.
// ❖ Nofinal, exiba a quantidade de medicamentos em falta e liste seus nomes na interface.
let medicamentosEmFalta = 0;
const nomesMedicamentosEmFalta = [];
medicamentos.forEach((medicamento) => {
  if (medicamento.estoque === 0) {
    medicamentosEmFalta++;
    nomesMedicamentosEmFalta.push(medicamento.nome);
  }
  const resultado = document.getElementById("resultado-falta");
  resultado.textContent = `Medicamentos em falta ${medicamentosEmFalta}`;

  const resultadoNomeFalta = document.getElementById("resultado-nome-falta");
  if (medicamentosEmFalta > 0) {
    resultadoNomeFalta.textContent = `Medicamento em falta ${nomesMedicamentosEmFalta.join(", ")}`;
  }
});
