// Classe pai - Classe filha
// SuperClasse - subClasse - extends

// Classe base (superclasse)
class Employee {
  constructor(name, role, baseSalary) {
    this.name = name;
    this.role = role;
    this.baseSalary = baseSalary;
  }
  getAnunalSalary() {
    return this.baseSalary * 12;
  }
}

// SubClasse : desenvolvedor
class Developer extends Employee {
  constructor(name, baseSalary, programmingLenguage) {
    super(name, "Developer", baseSalary);
    this.programmingLenguage = programmingLenguage;
  }
  getInfo() {
    return `${this.name} é programador da linguagem ${this.programmingLenguage} e seu salario anual é de ${this.getAnunalSalary()}`;
  }
}
const developer1 = new Developer("João", 4000, "javascript");
const developer2 = new Developer("Ana", 5000, "Python");
console.log(developer1);
console.log(developer1.getInfo());
console.log(developer2.getInfo());
console.log(developer1 instanceof Developer)
console.log(developer1 instanceof Employee)

// Subclasse : gerente
class Manager extends Employee {
  constructor(name, baseSalary, teamSyze) {
    super(name, "Manager", baseSalary);
    this.teamSyze = teamSyze;
  }
  getInfo() {
    return `${this.name} é gerente de um equipe de ${this.teamSyze} pessoas`
  }
}
const gerent1 = new Manager('Luiz', 5000, 15)
console.log(gerent1)
console.log(gerent1.getInfo())
console.log(gerent1.getAnunalSalary())
console.log(gerent1 instanceof Employee)
console.log(gerent1 instanceof Manager)



