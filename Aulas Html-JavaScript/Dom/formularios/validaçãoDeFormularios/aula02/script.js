document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    resetarMensagensError();

    if (!validarCamposObrigatorios()) {
      event.preventDefault(); // impede a submissão se houver erros
    }
    if (!campoSenha()) {
      event.preventDefault();
    }
  });

  function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll(".obrigatorio");
    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];
      if (campo.value === "" || campo.value === null) {
        exibirError(campo, "Este campo é obrigatório");
        camposValidos = false;
      }
    }
    // console.log(camposValidos)
    return camposValidos;
  }

  function campoSenha() {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
      exibirError(confirmarSenha, "As senhas não coincidem");
      return false;
    }
    return true;
  }

  function exibirError(elemento, mensagem) {
    let mensagemError = elemento.parentElement.querySelector(".error-message");
    mensagemError.textContent = mensagem;
    mensagemError.style.display = "inline-block";
  }

  function resetarMensagensError() {
    let mensagensError = document.querySelectorAll(".error-message");
    for (let i = 0; i < mensagensError.length; i++) {
      mensagensError[i].textContent = "";
    }
  }
});
