import { Personagem } from "./Personagem.js";

export class Soldado extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, poderEscudo) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.poderEscudo = poderEscudo;
  }
  atacar(alvo) {
    const dano = this.poderAtaque - alvo.poderDefesa + this.poderEscudo;
    alvo.energia -= dano > 0 ? dano : 0
    console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano com escudo`)
  }
}
