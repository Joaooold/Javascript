class Endereço {
  constructor(rua, cidade, estado) {
    this.rua = rua;
    this.cidade = cidade;
    this.estado = estado;
  }

  getEnderecoCompleto() {
    return `${this.rua}, ${this.cidade}, ${this.estado}`;
  }
}

class Pessoa {
  constructor(nome, idade, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco; //tipo objeto - Armazena um objeto da classe endereço
  }
  getDetalhes() {
    return `${this.nome}, ${this.idade}, ${this.endereco.getEnderecoCompleto()}`;
  }
}

const enderecoJoao = new Endereço("Alto da liberdade, 321", "Cruz", "CE");
console.log(enderecoJoao.getEnderecoCompleto());
console.log(enderecoJoao);
const joao = new Pessoa("João", "35", enderecoJoao); // Associação simples
console.log(joao);
console.log(joao.getDetalhes());

// Associação simples 1:1 (1 para 1)

// Agregação
class Roda {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this.rodas = []; // Agregação de rodas
  }
  adicionarRoda(roda) {
    this.rodas.push(roda);
  }
}

const carro = new Carro("SUV");
console.log(carro);
carro.adicionarRoda(new Roda("Dianteira direita"));
carro.adicionarRoda(new Roda("Dianteira esquerda"));
console.log(carro.rodas.map((roda) => roda.tipo));
console.log(carro);
