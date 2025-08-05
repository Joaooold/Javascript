 
function carregar() {
    let body = document.getElementById("body")
    let frase = document.getElementById("frase")
    let imagem = document.getElementById("minhaImagem")
    let data = new Date()
    let hora = data.getHours()
    

    if(hora >= 6 && hora <= 12) { //manhã
        body.style.backgroundColor = "rgb(205, 188, 142)"
        imagem.src = "../desafio001/img/img-manhã.jpg"
        frase.innerHTML = `São aproximadamente ${hora} Horas da manhã`
    } else if(hora >= 13 && hora <= 17){ // tarde
        body.style.backgroundColor = "rgb(163, 119, 98)"
        imagem.src = "../desafio001/img/img-tarde.jpg"
        frase.innerHTML = `São aproximadamente ${hora} Horas da tarde`
    } else if(hora >= 18 && hora <= 23) { // noite
        body.style.backgroundColor = "rgb(70, 73, 72)"
        imagem.src = "../desafio001/img/img-noite.jpg"
        frase.innerHTML = `São aproximadamente ${hora} Horas da noite`
    }   else { // madrugada
        body.style.backgroundColor = "rgba(143, 150, 148, 1)"
        imagem.src = "../desafio001/img/img-madrugada.jpg"
        frase.innerHTML = `São aproximadamente ${hora} Horas da madrugada`

    }
}
