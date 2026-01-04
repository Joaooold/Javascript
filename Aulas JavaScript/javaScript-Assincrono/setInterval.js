// setInterval() função nativa que permite executar um código repetidamente
// setInterval(callBack, tempo)

console.log("inicio");
setInterval(() => {
  console.log("Começando tarefas");
}, 3000);

setInterval(() => {
  for (let i = 0; i <= 5; i++) {
    console.log(`Tarefa: ${i}`);
  }
}, 1000);

console.log("Fim");
