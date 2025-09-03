/*Requisito 9: Crie uma função que receba um array de números e retorne a média desses
números.
Função: calcularMedia
Exemplo Entrada: // calcularMedia([10, 20, 30, 40]);
Exemplo Saída: // 25 */

const numerosArray = [10, 20, 30, 40, 50];

const calcularMedia = (numeros) => {
  if (numerosArray.length === 0) {
    return 0;
  }
  //   variavel de controle
  let soma = 0;
  for (let i = 0; i < numerosArray.length; i++) {
    soma += numeros[i];
  }
  return soma / numerosArray.length;
};
console.log(calcularMedia(numerosArray));
