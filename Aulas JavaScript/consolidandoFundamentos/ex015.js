/* Exercício 15: Crie uma função que receba um array de nomes de investimentos que você
quer fazer e um segundo parâmetro com seu nome.
Função: gerarListaInvestimentos
Exemplo Entrada: //const investimentos = [5000, 2000, 15000];
const nome = "Maria";
const resultado = gerarListaInvestimentos(investimentos1, nome1);
Exemplo Saída:
// [
{ investimento: 2000, nome: "Maria" },
{ investimento: 5000, nome: "Maria" },
{ investimento: 15000, nome: "Maria" }

 */
const investimentos = [5000, 2000, 15000];
const nomes = "João";
function gerarListaInvestimentos(investimentos1, nome1) {
  lista = [];
  for (let i = 0; i < investimentos.length; i++) {
    lista.push({ investimento: investimentos[i], nome: nomes });
  }
  return lista;
}
const investimentosLista = gerarListaInvestimentos(investimentos, nomes);
console.log(investimentosLista);
