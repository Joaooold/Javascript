import { Personagem } from "./Personagem.js";

export class Engenheiro extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeConcerto) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeConcerto = habilidadeConcerto;
  }
  atacar(alvo) {
    const cura = this.habilidadeConcerto;
    alvo.energia += cura;
    console.log(`${this.nome} curou ${alvo.nome} restaurando ${cura} de energia`);
  }
}
