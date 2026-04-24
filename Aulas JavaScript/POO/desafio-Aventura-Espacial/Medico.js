import { Personagem } from "./Personagem.js";

export class Medico extends Personagem {
    constructor(nome, energia, poderAtaque, poderDefesa, habilidadeDeCura) {
        super(nome, energia, poderAtaque, poderDefesa)
        this.habilidadeDeCura = habilidadeDeCura
    }
    atacar(alvo) {
        const cura = this.habilidadeDeCura
        alvo.energia += cura
        console.log(`${this.nome} curou ${alvo.nome} restaurando ${cura} de energia`);
    }
}