let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let num3 = document.querySelector("#num3")
let resultado = document.querySelector("#resultado")
let emojiMao = "\u{1F449}"
let emojiChegada = "\u{1F6A9}"


function contarNumeros() {
    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let numero3 = Number(num3.value)
    
    
    if(numero1,numero2,numero3 == "") {
        alert("por favor insira os números nas caixas")
    } 
    for(let total = numero1; total <= numero2; total += numero3) {
        resultado.innerHTML += `${total} ${emojiMao} ` 
         
    }
    resultado.innerHTML += `${emojiChegada}`
}
