class Member {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  authenticate = (email, password) => {
    if (email === this.email && password === this.password) {
      return console.log("Login realizado com sucesso");
    } else {
      return console.log("O email ou a senha estão errados, tente novamente");
    }
  };
}

const alice = new Member("Alice Johnson", "alice@email.com", "password123");

console.log(alice);
alice.authenticate("alice@email.com", "password123");

//////////////////////////////////////
class Item {
  constructor(name, description, price, quantityAvailable) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = quantityAvailable;
  }
  addToInventory = (quantity) => {
    return quantity += this.quantityAvailable;
  };
}
const chair = new Item("Cadeira de Escritório", "Cadeira confortávelcom ajuste de altura", 150);
console.log(chair.addToInventory(50))
