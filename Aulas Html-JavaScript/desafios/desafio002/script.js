function verificar() {
    let ano = document.getElementById("txtano")
    let res = document.querySelector("div.res")
    let img = document.getElementById("img")
    let data = new Date()
    let anoTotal = data.getFullYear() 
    // verifica se o ano for 0 ou ano for maior que 2025 = ERRO
    if(ano.value.lenght == 0 || Number(ano.value) > anoTotal) {
        alert("[ERRO] varifique os dados e tente novamente")
    } else {
        let fsex = document.getElementsByName("radsex") // masculino e feminino
        //  calcular a idade
        let idade = anoTotal - Number(ano.value)
        let gênero = ""
       
        if(fsex[0].checked) {
            gênero = "Homen"
            if(idade > 0 && idade < 12) {
            // criança
            img.src = "TesteHtml/desafios/desafio002/homenbebe.jpg"
             } else if (idade < 30) {
                // Adulto
                img.src = "TesteHtml/desafios/desafio002/homenbebe.jpg"
            } else {
                // velho
                img.src = "TesteHtml/desafios/desafio002/homenbebe.jpg"
            }
        } else if(fsex[1].checked){
            gênero = "mulher"
            if(idade > 0 && idade < 12) {
            // criança
            } else if (idade < 30) {
            // Adulto
            } else {
            // velho
       }
        }
        res.innerHTML = `detectamos ${gênero} nasceu em ${idade}`
        res.appendChild(img)
    }

}