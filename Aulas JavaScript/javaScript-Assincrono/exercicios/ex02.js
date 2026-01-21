// const fs = require('fs');
// //o método readFile lê o conteúdo de um arquivo identificado
// //por filename (coloque o nome do arquivo e o caminho dele,
// // ex: './textoExercicio2.txt' ) e entrega esse conteúdo dentro //do objeto "data"
// fs.readFile(filename, (err, data) => {
//  if (err) {
//  //Aqui escrevemos um tratamento para um erro na tentativa de leitura do aquivo
//  return;
//  }
//  //Aqui escrevemos o que deve ser feito com o objeto "data"
// });

const fs = require("fs");

function lerArquivo(nomeArquivo, callback) {
  fs.readFile(nomeArquivo, "utf-8", (err, data) => {
    if (err) {
      console.error("Erro ao ler arquivo" + err);
      return;
    }
    callback(data)
  });
}
lerArquivo("./textoExercicio2.txt", (conteudo)=> {
    console.log("Contéudo do arquivo:", conteudo)
})
