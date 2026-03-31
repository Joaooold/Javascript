class Student {
  constructor(name, age, modality, active, sessions, progress, personalTrainer) {
    this.name = name;
    this.age = age;
    this.modality = modality;
    this.active = active;
    this.sessions = sessions;
    this.progress = progress;
    this.personalTrainer = personalTrainer || "Não possui";
  }
  userSessions = () => {
    if (this.sessions > 0) {
      this.sessions -= 1; // reduza 1
      console.log("Sessão utilizada: " + `Sessões restantes ${this.sessions}`);
    } else {
      console.log("Não a mas sessões restantes. Renove seu plano");
    }
  };
}

// Criando instâcia
const student1 = new Student("João Batista", 23, "Musculação", true, 10, ["Treino A", "Treino B"], {
  name: "Viviane",
  experience: "10 anos",
});
const student2 = new Student("Lucelia", 43, "Pilates", true, 40, ["Pilates Solo"]);

console.log(student1);
console.log(student2);
student1.userSessions();
student2.userSessions();
