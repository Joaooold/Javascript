// Calcular fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
let valorFatorial = fatorial(15);
// console.log(valorFatorial)

//recursividade String
function recursividade(string) {
  if (string === "") {
    return 0;
  }
  return 1 + recursividade(string.substring(1));
}
console.log(recursividade(""));
