let num = document.getElementById("txtnum")
let tab = document.getElementById("select-tab")

function tabuada() {
    if(num.value == "") {
        alert("Por favor escreva um número")
    }   else {
        let n = Number(num.value)
        tab.innerHTML = " "
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)

        }
    }
}
