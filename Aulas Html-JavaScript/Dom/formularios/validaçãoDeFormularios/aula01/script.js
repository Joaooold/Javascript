function validarFormulario() {
    const campoTexto = document.getElementById("campoTexto")
    let valorCampo = campoTexto.value
    if(valorCampo === "") {
        alert("Por favor, Preencha o campo de texto")
        return false
    } else {
        return true
    }
}