function tratarErrorFuncaoInexistente() {
  try {
    funcaoInexistente();
  } catch (error) {
    console.error("Error: A função que você estar chamando não existe", error);
  }
}
// function funcaoInexistente() {
//   console.log("A função agora existe");
// }
tratarErrorFuncaoInexistente();
