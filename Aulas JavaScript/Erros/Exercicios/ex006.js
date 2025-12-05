function tratarErroDivisaoPorZero() {
  try {
    const dividento = 10;
    const divisor = 0;
    if (divisor === 0) {
      throw new Error("Erro: Divisão por zero não é permitida");
    }
    const resultado = dividento / divisor;
    console.log(`Resultado da divisão: ${resultado}`)
  } catch (erro) {
    console.error(erro.message);
  }
}
tratarErroDivisaoPorZero()