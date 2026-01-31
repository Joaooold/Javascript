// function createBalance(name, accountNumber, balance) {
//   return {
//     username: name,
//     accountNumber, //Se a propriedade do objeto for igual ao nome do valor nao precisa colocar o valor
//     balanceNumber: balance,
//     displayBalance: function () {
//       console.log(`Account Number: ${this.accountNumber} has a total balance: ${this.Balance}`);
//     },
//   };
// }

// Criar uma função construtora para criar um objeto dinamico esta função sempre começa com letra maiuscula
function Account(username, accountNumber, balance) {
  ((this.name = username), (this.accountNumber = accountNumber), (this.balanceNumber = balance));
  this.displayBalance = function () {
    console.log(`Account Number: ${this.accountNumber} has a total balance: ${this.balanceNumber}`);
  };
}

let accountFunction = new Account("João Batista", "1234566-00", 5000);
console.log(accountFunction);
accountFunction.displayBalance();
let accountFunction2 = new Account("Lucas Silva", "9876444-90", 22000);
console.log(accountFunction2);
accountFunction2.displayBalance();
