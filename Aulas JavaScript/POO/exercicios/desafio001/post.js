export default class Post {
  constructor(título, conteudo, autor) {
    this.título = título
    this.conteudo = conteudo
    this.autor = autor
    this.comentarios = []
    this.data = new Date()
  }

  adicionarComentarios(comentario) {
    this.comentarios.push(comentario)
  }
  listarComentarios() {
    return this.comentarios.map((comentario) => `${comentario.autor}: ${comentario.conteudo}`)
  }
}
