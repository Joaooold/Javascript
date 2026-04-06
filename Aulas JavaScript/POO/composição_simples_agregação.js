// Composição - Simples
class Pagina {
  constructor(numero) {
    this.numero = numero;
  }
}
class Livro {
  constructor(titulo) {
    this.titulo = titulo;
    this.paginas = [];
  }
  adicionarPaginas(numero) {
    const pagina = new Pagina(numero);
    this.paginas.push(pagina);
  }
}
const livro = new Livro("Aprendendo JavaScript");
livro.adicionarPaginas(1);
livro.adicionarPaginas(2);
livro.adicionarPaginas(3);
console.log(`O livro ${livro.titulo} tem ${livro.paginas.length} páginas`);
console.log(livro);
console.log(livro.paginas);

// Associação 1: Muitos (N)
class Pedido {
  constructor(descrição) {
    this.descrição = descrição;
  }
}

class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.pedidos = [];
  }

  adicionarPedidos(pedido) {
    this.pedidos.push(pedido);
  }

  listaPedidos() {
    return this.pedidos.map((pedido) => pedido.descrição);
  }
}
const cliente = new Cliente("João");
cliente.adicionarPedidos(new Pedido("Pedido 1"));
cliente.adicionarPedidos(new Pedido("Pedido 2"));
console.log(cliente);
console.log(`Pedidos de ${cliente.nome}:`, cliente.listaPedidos());
