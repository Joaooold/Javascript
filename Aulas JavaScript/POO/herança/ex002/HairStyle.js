import Staff from "./Staff.js";

// Subclasse de staff
export default class HairStyle extends Staff {
  constructor(name, monthySalary, specialties) {
    super(name, "cabeleireiro(a)", monthySalary);
    this.specialties = specialties; // array de especializações
  }
  // Metodo privado
  #getEspecialties() {
    return `Especializações: ${this.specialties.join(", ")}.`;
  }
  getInfo() {
    return `${super.getInfo()}: ${this.#getEspecialties()}`;
  }
}
