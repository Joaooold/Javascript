// Do While (O "do" sempre vai executar primeiro e depois vai verificar a condição)
// (Mesmo se a condição for falsa o "do" sempre vai executar pelo menos uma vez)
let numero = 1;
do {
  console.log(`Contagem de numeros: ${numero}`);
  numero++;
} while (numero <= 5);

console.log("contagem do.. while foi concluída");

let funcionariosParaRegistrar = 7;
do {
  console.log(`Contagem de funcionarios para se registrar ${funcionariosParaRegistrar}`);

  funcionariosParaRegistrar--;
} while (funcionariosParaRegistrar > 0);

console.log(`Todos os ${funcionariosParaRegistrar} funcionários foram registrados`);
