document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function () {
    // alert("o formulario foi enviado com sucesso!!");
  });
});

let campoTexto = document.getElementById("texto");

campoTexto.addEventListener("change", function () {
  console.log("O campo de texto foi atualizado com sucesso: " + campoTexto.value);
});

campoTexto.addEventListener("focus", function () {
  console.log("O campo de texto esta sendo focado");
});

campoTexto.addEventListener("blur", function () {
  console.log("O campo de texto foi desfocado");
});

function mostrarValorTexto() {
    let campoTexto = document.getElementById('texto').value
    alert(`O valor do campo é: ${campoTexto}`)
}
