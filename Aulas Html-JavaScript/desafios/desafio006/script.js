document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nome = document.getElementById("nome");
  const mensagemError = document.getElementById("nome-error");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!nome.value) {
      mensagemError.style.display = "inline-block";
      return;
    } else {
      mensagemError.style.display = "none";
    }

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);

    const resultadoElement = document.getElementById("resultado");
    let categoria;
    // console.log(imc);
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      resultadoElement.style.backgroundColor = "#FFFF00"
    } else if (imc < 25) {
      categoria = "Peso normal";
      resultadoElement.style.backgroundColor = "#09ff00ff"
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultadoElement.style.backgroundColor = "#ffa600ff"
    } else {
      categoria = "Obesidade";
      resultadoElement.style.backgroundColor = "#ff0000ff"
    }
    resultadoElement.innerHTML = `<p>${nome.value}, Seu IMC é: ${imc.toFixed(2)}. Você estar na categoria: ${categoria}</p>`

    document.getElementById("categoria").value = categoria
    let dados = new FormData(formulario)
    for(let [chave, valor] of dados.entries()){
      console.log(`${chave}: ${valor}`)
    }
  });
});
