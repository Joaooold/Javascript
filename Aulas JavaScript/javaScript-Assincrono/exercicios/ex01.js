// Exercício 1: Callback Simples
// Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
// (callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de
// chamada.
const imprimirMensagem = (mensagem, callback) => {
  console.log(mensagem);
  callback();
};
imprimirMensagem("Mensagem de teste", () => {
  console.log("Esta mensagem é resultado de uma callback");
});
imprimirMensagem("Outra mensagem", () => {
  console.log(`${2+5}`)
});
