// function lerArquivo() {
//   try {
//     // const conteudoDoArquivo = "Este conteudo do arquivo ficticio";
//     console.log(`conteudo do arquivo: ${conteudoDoArquivo}`);
//   } catch (erro) {
//     console.error(`Error: Ocorreu um erro da leitura ${erro.message}`);
//   } finally {
//     console.log("Bloco finally estar sendo executado, encerra a operação da função");
//   }
// }
// lerArquivo();

// Modulo FS
const fs = require("fs")

function lerArquivoFS() {
    try{
        const conteudoDoArquivo = fs.readFileSync("arquivo.txt", "utf-8")
        console.log(conteudoDoArquivo)
    } catch(erro) {
        console.error("Erro ao ler arquivo:", erro.message)
    } finally {
        console.log("Bloco finally estar sendo executado, encerra a operação da função")
    }
}
lerArquivoFS()

