/*RRequisito 6: Crie uma função que receba o número de vitórias e empates de um time e
retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
vale 1 ponto.
Função: calcularPontos
Exemplo Entrada: // calcularPontos(5, 2);
Exemplo Saída: // 17 */

const calcularPontos = (n1, n2) => {
  let vitoria = n1 * 3;
  let impate = n2;
  return vitoria + impate;
};
console.log(calcularPontos(5, 2));
