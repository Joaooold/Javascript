class Member {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  authenticate(email, password) {
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
  constructor(name, description, price, quantityAvailable = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = quantityAvailable;
  }
  addToInventory(quantity) {
    this.quantityAvailable += quantity;
  };
  applyOffer(discount) {
    return this.price * ((100 - discount) / 100);
  }
}
const chair = new Item("Cadeira de Escritório", "Cadeira confortável com ajuste de altura", 150);
chair.addToInventory(50);
console.log(chair.quantityAvailable); // 50
console.log(chair.applyOffer(20)); // 120
console.log(chair.applyOffer(10)); // 135

