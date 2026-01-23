// Exercício 10: Async/Await com Tratamento de Erros
// Escreva uma função assíncrona obterDadosComFallback que usa try...catch e await para buscar dados de uma
// API. Se ocorrer um erro, utilize um valor de fallback e imprima-o no console
// Simulando uma API como um objeto
const apiSimulada = {
    obterDados: function() {
        if (Math.random() > 0.5) {
            throw new Error("Erro ao obter dados da API");
        }
        return { dados: "Dados obtidos com sucesso!" };
    }
};

// Função assíncrona que utiliza try...catch e await
async function obterDadosComFallback() {
    try {
        // Simulando a chamada à API
        const resultado = await apiSimulada.obterDados();
        console.log(resultado.dados);
    } catch (error) {
        // Tratamento do erro e uso de valor de fallback
        const valorFallback = { dados: "Dados de fallback utilizados." };
        console.error(error.message);
        console.log(valorFallback.dados);
    }
}

obterDadosComFallback();

