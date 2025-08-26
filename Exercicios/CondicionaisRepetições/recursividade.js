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
// console.log(recursividade(""));

// recursividade Object
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024,
  peças: {
    portas: 4,
    airbag: true,
    pneus: "sistema abs",
  },
};
// Função recursiva para imprimir propriedades de um objeto simples
function imprimirObjeto(objeto) {
  // Obter as chaves do objeto
  const keys = Object.keys(objeto); // lista [marca,modelo,carro]
  // Caso o objeto estiver vazio
  if (keys.length === 0) {
    return; //interronper a função
  }
  //   interação sobre as chaves do objeto
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = objeto[key];
    // verificação se o valor é um objeto
    if (typeof value === "object") {
      //Se for objeto chama recursivamente a função
      imprimirObjeto(value);
    } else {
      // Se não for objeto, imprimi chave e seu valor
      console.log(`${key}: ${value}`);
    }
  }
}
imprimirObjeto(carro);

