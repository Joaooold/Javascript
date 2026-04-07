export default class Curso {
    constructor(nome, codigo) {
        this.nome = nome
        this.codigo = codigo
        this.alunos = []
    }
    adicionarAlunos(aluno) {
        return this.alunos.push(aluno)
    }
    listarAlunos() {
        return this.alunos.map((aluno) => aluno.nome)
    }
}