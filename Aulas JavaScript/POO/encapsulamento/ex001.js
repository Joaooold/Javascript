class Produto {
  #estoque; // Atributo privado
  constructor(nome, preco, quantidadeInicial) {
    this.nome = nome; // publico
    this.preco = preco; // publico
    this.#estoque = quantidadeInicial;
  }
  //   Metodo publico para verificar estoque
  consultarProduto() {
    return `O produto ${this.nome} tem ${this.#estoque} unidades`;
  }
  //   Metodo para adicionar estoque
  adicionarEstoque(quantidade) {
    if (quantidade > 0) {
      this.#estoque += quantidade;
      return `foi adicionado ao estoque ${quantidade} unidade`;
    } else {
      return "Precisa ser mais que zero";
    }
  }
  //   Metodo privado
  #calcularDesconto(percentual) {
    return this.preco - (this.preco * percentual) / 100;
  }
  precoComDesconto(percentual) {
    return `O preco com desconto de ${percentual}% é R$${this.#calcularDesconto(percentual).toFixed(2)}`;
  }
}

const produto = new Produto("PC", "6000", 5);
console.log(produto);
console.log(produto.quantidadeInicial); // Não temos acesso porque estar privado
console.log(produto.consultarProduto());
console.log(produto.adicionarEstoque(8));
console.log(produto.precoComDesconto(10));
