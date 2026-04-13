// Super Classe com carcteristicas em comum
export default class Staff {
  constructor(name, role, monthySalary) {
    this.name = name;
    this.role = role;
    this.monthySalary = monthySalary;
  }
  getMonthySalary() {
    return this.monthySalary;
  }
  getInfo() {
    return `${this.name} trabalha como ${this.role}`
  }
}
