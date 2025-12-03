function tratarErrorVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);
  } catch (error) {
    console.error("A variavel que estar tentando acessar não foi definida", error);
  }
}
// const variavelNaoDefinida = "Agora a variável estar definida"
tratarErrorVariavelNaoDefinida();
