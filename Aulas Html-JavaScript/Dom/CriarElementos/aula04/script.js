const lista = document.getElementById("list")
let n = 4

function adicionarItem() {
  const novaLi = document.createElement("li")
  novaLi.innerHTML = `Item ${n++}`
  lista.appendChild(novaLi)
}

function removerItem() {
  const removerLi = lista.lastElementChild
  lista.removeChild(removerLi)
}