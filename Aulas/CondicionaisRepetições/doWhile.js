// Do While (O "do" sempre vai executar primeiro e depois vai verificar a condição)
// (Mesmo se a condição for falsa o "do" sempre vai executar pelo menos uma vez)
let numero = 1;
do {
  // console.log(`Contagem de numeros: ${numero}`);
  numero++;
} while (numero <= 5);

// console.log("contagem do.. while foi concluída");

let funcionariosParaRegistrar = 7;
do {
  // console.log(`Contagem de funcionarios para se registrar ${funcionariosParaRegistrar}`);
  funcionariosParaRegistrar--;
} while (funcionariosParaRegistrar > 0);

// console.log(`Todos os ${funcionariosParaRegistrar} funcionários foram registrados`);

// Exemplos
let reproduzido = true;
let entrada = 1;

function reproduzirFilme() {
  console.log("Apertou o play");
}

function pausarFilme() {
  console.log("Filme foi pausado");
}

function sairFilme() {
  console.log("Saindo do filme");
}

function Filme(entrada) {
  do {
    console.log("Opções de configuração: 1 - pausar e 2 - sair");
    console.log(`Opções: ${entrada}`);

    if (entrada === 1) {
      pausarFilme();
      reproduzido = false;
    } else if (entrada === 2) {
      sairFilme();
      reproduzido = false;
    }
  } while (reproduzido);
}
reproduzirFilme()
Filme(entrada)
