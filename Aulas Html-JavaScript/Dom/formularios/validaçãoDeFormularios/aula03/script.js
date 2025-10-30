document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuFormulario")

    formulario.addEventListener("submit", function(e) {
        e.preventDefault()
        let dados = new FormData(formulario)
        for(let [chave, valor] of dados.entries()) {
            console.log(chave + ": " + valor)
        }
    })
})