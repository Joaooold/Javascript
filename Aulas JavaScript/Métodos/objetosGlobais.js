// Math Aula 01
let pi = Math.PI;
console.log(pi);

let raizQuadrada = Math.sqrt(100);
console.log(raizQuadrada);

let exponenciação = Math.pow(2, 5); // base, elevado
console.log(exponenciação);

// Aula 02
let numero = 3.34;
let numero2 = 3.55;
console.log(Math.round(numero)); //Arredonda o numero para o valor mais próximo
console.log(Math.round(numero2));

let aléatorio = Math.random() * 100; // digita um valor pseudo-aleatorio entre 0 e 1 (podendo ser modificado como no exemplo * 100)
console.log(Number.parseFloat(aléatorio.toFixed()));

// Aula 03
// Math.min() - retorna o valor minimo encontrado dentro de uma lista de números
// Math.max() - retorna o valor maximo encontrado dentro de uma lista de números

console.log(Math.min(8, 44, 56, 67, 22, 5));
console.log(Math.max(8, 44, 56, 67, 22, 5));

// console.log(Math.max([8,44,56,67,22,5])) não funciona retorna NaN
let lista = [8, 44, 56, 67, 22, 5];
console.log(Math.max(lista)); // tambem retorna NaN
console.log(Math.max(...lista)); // spread operador ... (espalha espalha informações da lista)
console.log(Math.min(...lista));

// Data
console.log("Aula Data ///////////////////////////////////////////////////////////////");
let dataAtual = new Date();
console.log(dataAtual);
console.log(dataAtual.getDate());
console.log(dataAtual.getDay());
console.log(dataAtual.getFullYear());
console.log(dataAtual.getHours());
console.log(dataAtual.getMilliseconds());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getMonth() + 1); // Mês vão de 0 a 11
console.log(dataAtual.getTime());

let timeStamp = dataAtual.getTime();
console.log(timeStamp);
console.log(new Date(1755700837301));
