document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("#meuFormulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    if (nome && idade) {
      // Salvo no localStorage
      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);

      // Limpar os campos no formulario
      document.getElementById("nome").value = "";
      document.getElementById("idade").value = "";

      alert("Os dados foram atualizados");
    } else {
      alert("Porfavor preencha todos os dados");
    }
  });
  const carregarBtn = document.querySelector("#carregar");
  const texto = document.getElementById("texto");
  // Armazenar dados
  carregarBtn.addEventListener("click", function () {
    const dadosNome = localStorage.getItem("nome");
    const dadosIdade = localStorage.getItem("idade");

    texto.textContent = `O nome do usuário é ${dadosNome} e sua idade é ${dadosIdade}.`;
  });
  const limparDados = document.querySelector("#limpar");
  // Limpar dados
  limparDados.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("idade");
    texto.textContent = "";
    alert("Os dados foram limpos");
  });
});
