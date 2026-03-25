// Criar addUser
export function addUser(user) {
  document.getElementById("message").textContent = `Usuário ${user} adicionado`;
}

// Delete User
export function deleteUSer(user) {
  document.getElementById("message").textContent = `Usuário ${user} deletado`;
}

// Update User
export function UpdateUser(user ,newInfo) {
  document.getElementById("message").textContent = `Usuário ${user} atualizado com nova informação: ${newInfo}`;
}
