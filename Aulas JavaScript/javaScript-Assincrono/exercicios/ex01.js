function imprimirMensagem(mensagem) {
  mensagem("Mensagem do callback");
}

function callbackMensagem(mensagemcallback) {
  console.log(`Texto: ${mensagemcallback}`);
}

imprimirMensagem(callbackMensagem);
