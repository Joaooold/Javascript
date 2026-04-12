class Processo {
  #numeroCliente;
  constructor(cliente, numero) {
    this.cliente = cliente;
    this.#numeroCliente = this.#validarNumero(numero) ? numero : null; //privado
  }
  // Metodo Privado para validar numero do processo
  #validarNumero(numero) {
    const regex = /^[0-9]{6}-[0-9]{4}$/; //Exemplo de formata = 123456-7890
    if (regex.test(numero)) {
      return true;
    } else {
      console.log("numero de processo inválido");
      return false;
    }
  }
  //   Metodo publico para acessar numero
  acessarNumero() {
    return this.#numeroCliente ? `numero do cliente é ${this.#numeroCliente}` : "Número estar invalido";
  }
}
const processo1 = new Processo("Joao", '098765-4321')
console.log(processo1.acessarNumero())
