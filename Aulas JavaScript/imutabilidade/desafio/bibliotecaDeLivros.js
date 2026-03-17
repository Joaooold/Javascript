// Adicionar livros
const book = [{ title: "JavaScript Avançado", author: "Fulano", status: "disponível" }];
const addBooks = (estandeDeLivros, title, author, status) => {
  return [...estandeDeLivros, { title, author, status }];
};
const newBook = addBooks(book, "Imutabilidade em JS", "Beltrano", "disponível");
console.log('livos original', book)
console.log('livos adiconados', newBook)

// Atualizar status
const updateBooks = (estandeDeLivros, titulo, newStatus) => {
    return newBook.map((livro) => livro.title = titulo ? {...estandeDeLivros, status: newStatus} : livro) 
}
console.log("Livros atualizados", updateBooks(book,"JavaScript Avançado", "Emprestado"))

// Remover livros
const removeBook = (estandeDeLivros, title) => {
    return newBook.filter((livro) => livro.title !== title)
}
console.log(removeBook(newBook, 'Imutabilidade em JS'))