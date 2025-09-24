/*Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
que o maior gasto aparece nesse array.
Função: maiorGasto
Exemplo Entrada: // maiorGasto([10, 5, 20, 15]);
Exemplo Saída: // 20 */

const arrayGastos = [10, 5, 20, 15];

function maiorGasto() {
  const maiorNumero = Math.max(...arrayGastos);
  return maiorNumero;
}
console.log(maiorGasto());
