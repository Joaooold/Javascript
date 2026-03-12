const user = { nome: "Joao", idade: 20 };
// Adicionando uma propriedade
const user2 = { ...user, email: "Joao@exemplo.com" };
console.log(user);
console.log("Usuario com o email adicionado: ", user2);

// Remover propriedade
const { idade, ...objetoSemIdade } = user2;
console.log("Removi a idade", objetoSemIdade);

// Atualizar propriedade
const atualizarNome = { ...user, nome: "lucelia" };
console.log("Nome atualizado", atualizarNome);

// Copiar com assign
const userAtualizadoAssign = Object.assign({}, user2, {nome: "Batista",financeiro: 3000});
console.log(userAtualizadoAssign)
console.log("Hello")
console.log(1+1)
