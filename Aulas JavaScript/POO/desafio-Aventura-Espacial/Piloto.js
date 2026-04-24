import { Personagem } from "./Personagem.js";

export class Piloto extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadePiloto) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadePiloto = habilidadePiloto;
  }
  atacar(alvo) {
    const dano = (this.poderAtaque + this.habilidadePiloto) * 1.5 - alvo.poderDefesa;
    alvo.energia -= dano > 0 ? dano : 0;
    console.log(`${this.nome} atacou ${alvo.nome} causando ${dano > 0 ? dano : 0} com manobras de nave`);
  }
}
