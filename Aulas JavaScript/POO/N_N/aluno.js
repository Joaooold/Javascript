export default class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.cursos = []; // cursos em que o aluno estar matriculado
  }
  matricular(curso) {
    this.cursos.push(curso);
    curso.adicionarAlunos(this); // Associar a instancia do aluno ao curso
  }
  listarCursos() {
    return this.cursos.map((curso) => curso.nome);
  }
}
