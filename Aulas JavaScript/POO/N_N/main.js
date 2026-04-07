import Curso from "./curso.js"
import Aluno from "./aluno.js"

// Criar cursos
const cursoJS = new Curso("JavaScript", "JS101")
const cursoPY = new Curso("Python", "PY101")

// Criar Alunos
const aluno1 = new Aluno("João Batista", 303101)
const aluno2 = new Aluno("Lucas Silva", 555101)

// Matricular
aluno1.matricular(cursoJS)
aluno1.matricular(cursoPY)
aluno2.matricular(cursoPY)

console.log(`Curso de ${aluno1.nome}: `, aluno1.listarCursos())
console.log(`Alunos do curso ${cursoPY.nome}:`, cursoPY.listarAlunos())
console.log(cursoPY)
console.log(cursoJS)