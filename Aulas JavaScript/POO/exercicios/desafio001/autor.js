import Post from "./post.js"

export default class Author {
    constructor(nome) {
        this.nome = nome
        this.posts = [] // Lista de post criados pelo autor
    }
    criaPost(título, conteudo) {
        const novoPost = new Post(título, conteudo, this) // o autor associado ao post
        this.posts.push(novoPost) // adicionar post a lista do autor
    }
    listarPost() {
        return this.posts.map((post) => post.título)
    }
}