import Comment from "./comment.js"
import Author from "./autor.js"

const autor1 = new Author("João Batista")

// Criar post 
const post1 = autor1.criaPost("Introdução ao javaScript", "Este conteudo sobre o fundamento do javascript")
const post2 = autor1.criaPost("Introdução ao CSS", "Aqui voce aprende a estilizar um site")
// Adicionar comentarios ao post
const comentario1 = new Comment("Ana", "Javascript é bom mesmo")
const comentario2 = new Comment("José", "Uau adorei o contéudo")

post1.adicionarComentarios(comentario1)
post1.adicionarComentarios(comentario2)
// Exibir os posts
console.log(`Post de ${autor1.nome}: ${autor1.listarPost()}`)

// Exibir os comentarios do primeiro post 
console.log(`Comentarios do post: ${post1.listarComentarios()}`)