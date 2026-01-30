function createBalance(name, accountNumber, balance) {
  return {
    username: name,
    accountNumber, //Se a propriedade do objeto for igual ao nome do valor nao precisa colocar o valor
    balanceNumber: balance,
    displayBalance: function () {
      console.log(`Account Number: ${this.accountNumber} has a total balance: ${this.Balance}`);
    },
  };
}
let accountFunction = createBalance("João Batista", "1234566-00", 5000);
console.log(accountFunction);
accountFunction.displayBalance();
let accountFunction2 = createBalance("Lucas Silva", "9876444-90", 22000);
console.log(accountFunction2);
accountFunction.displayBalance();
let accountFunction3 = createBalance("Lucelia Mesquita", "5134523-20", 50000);
console.log(accountFunction3);
accountFunction.displayBalance();

// const account1 = {
//   name: "joao batista",
//   accountNumber: 123456 - 66,
//   balance: 2000,
//   displayBalance: function () {
//     console.log(`Account Number: ${account1.accountNumber} has a total balance: ${account1.Balance}`);
//   },
// };
