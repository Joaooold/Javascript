// setInterval() função nativa que permite executar um código repetidamente
// setInterval(callBack, tempo)
// clearInterval

// console.log("inicio");
// setInterval(() => {
//   console.log("Começando tarefas");
// }, 3000);

// setInterval(() => {
//   for (let i = 0; i <= 5; i++) {
//     console.log(`Tarefa: ${i}`);
//   }
// }, 1000);

// console.log("Fim");


let contador = 5
let intervalo = setInterval(() => {
  console.log("O contador estar em " + contador)
  contador--
  if(contador < 0) {
    clearInterval(intervalo)
    console.log("Fim da contagem!")
  }
}, 1000);

console.log(intervalo)
