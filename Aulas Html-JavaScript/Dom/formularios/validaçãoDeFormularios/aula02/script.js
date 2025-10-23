document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    if (!validarCamposObrigatorios()) {
      event.preventDefault(); // impede a submissão se houver erros
    }

    function validarCamposObrigatorios() {
      let camposObrigatorios = document.querySelectorAll(".obrigatorio");
      let camposValidos = true;

      for (let i = 0; camposObrigatorios.length > i; i++) {
        let campo = camposObrigatorios[i];
        if (campo.value === "" || campo.value === null) {
          console.log("Este campo é obrigatório");
          camposValidos = false;
        }
      }
      // console.log(camposValidos)
      return camposValidos;
    }
  });
});
