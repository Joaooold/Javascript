/*Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
nela.
Função: contarVogais.
Exemplo Entrada: // contarVogais("Olá, tudo bem?");
Exemplo Saída: // 5 */

function contarVogais(frase) {
    const vogais = 'aeiouAEIOUáê';
    // variavel de controle
    let contador = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    console.log(`Quantidade de vogais: ${contador}`);
}

// Exemplo de uso
contarVogais("Olá, como você está?");
