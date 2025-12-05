function tratarConversaoTipo() {
  try {
    const string = "HSss";
    const resultado = Number(string);
    if (isNaN(resultado)) {
      throw new Error("Não foi possivel transformar a string em número");
    }
    console.log("Número convertido com sucesso:", resultado);
  } catch (erro) {
    console.error(erro.message);
  }
}
tratarConversaoTipo();
