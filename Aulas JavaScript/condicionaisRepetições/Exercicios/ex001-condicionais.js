// Pergunta 01 - Verificação de desconto
let desconto = 10;

function verificarDesconto(preco) {
  console.log(`O preço de sua compra foi de ${preco}`);
  if (preco >= 100) {
    const descontoTotal = preco * (desconto / 100);
    const precoFinal = preco - descontoTotal;

    console.log(`O desconto de sua compra foi de ${desconto}%`);
    console.log(`O preço final foi de ${precoFinal}`);
  } else {
    console.log("O desconto só vai ser aplicado se a compra for a partir de 100 Reais");
  }
}
// verificarDesconto(90);

// Pergunta 02 Verificação de produto de estoque

function verificarEstoque(estoque) {
  if (estoque > 0) {
    console.log("Produto disponível");
  } else {
    console.log("Produto indisponível");
  }
}
// verificarEstoque(0);

// Pergunta 03 - Determinação de catégoria de cliente
// 85 > "Cliente Premium; 50 > Cliente regular; 50 < cliente normal"

function categoriaCliente() {
  const clientes = Math.floor(Math.random() * 100); //floor tira as casas decimais e deixa o valor inteiro
  if (clientes > 85) {
    console.log("Cliente Premium");
  } else if (clientes > 50) {
    console.log("Cliente regular");
  } else {
    console.log("Cliente normal");
  }
}
// categoriaCliente();

// Pergunta 04 - Classificação de desempenho de vendas
function desempenhoIndividualDeVendas(vendidos, totalVendas) {
  const percentual = (vendidos / totalVendas) * 100;

  if (percentual >= 100) {
    return "Excelente desempenho";
  } else if (percentual >= 90 && percentual < 100) {
    return "Muito bom desempenho";
  } else if (percentual >= 80 && percentual < 90) {
    return "Bom desempenho";
  } else if (percentual > 60 && percentual < 80) {
    return "Desempenho satisfatório";
  } else {
    return "Desempenho insatisfatório";
  }
}
const vendidos = 800;
const metaVendas = 1000;
// console.log(desempenhoIndividualDeVendas(vendidos,metaVendas))

// Pergunta 05 - operador ternário - Verificação de velocidade
function VerificarVelocidade(velocidade) {
  velocidade >= 80 ? console.log(true) : console.log(false);
}
// VerificarVelocidade(80);

// Pergunta 06 - Sémaforo de Trânsito
function mensagemSemaforo(corSemaforo) {
  corSemaforo === "vermelho"
    ? console.log("Pare")
    : corSemaforo === "verde"
    ? console.log("Siga")
    : corSemaforo === "amarelo"
    ? console.log("diminua velocidade")
    : console.log("escolha uma cor do sémaforo para proceguir");
}
// mensagemSemaforo("vermelho");

// Pergunta 07 - SwitchCase - Prioridade no trânsito

function coresSemaforo(coresSemaforo) {
  switch (coresSemaforo) {
    case "vermelho":
      console.log("Pare Por favor");
      break;
    case "verde":
      console.log("Seguro passar");
      break;
    case "amarelo":
      console.log("diminua a velocidade");
      break;
    default:
      console.log("escolha uma cor do sémaforo para proceguir");
  }
}
coresSemaforo("amarelo");

// Pergunta 08 - Verificação de placa de veículo
function verificarPlaca(placaFinal) {
  let mensagem;
  switch (placaFinal) {
    case 1:
    case 2:
      mensagem = "Segunda-Feira";
      break;
    case 3:
    case 4:
      mensagem = "Terça-Feira";
      break;
    case 5:
    case 6:
      mensagem = "Quarta-Feira";
      break;
    case 7:
    case 8:
      mensagem = "Quinta-Feira";
      break;
    case 0:
    case 9:
      mensagem = "Sexta-Feira";
      break;
    default:
      mensagem = "Número inválido";
  }
  return mensagem = `O dia do rodízio é ${mensagem}`
}
console.log(verificarPlaca(3))
