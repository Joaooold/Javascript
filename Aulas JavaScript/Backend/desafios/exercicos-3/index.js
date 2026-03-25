// Importação de funções
import { addUser, deleteUSer, UpdateUser } from "./userManager.js";

document.getElementById("addUserBtn").addEventListener("click", () => {
  const userName = document.getElementById("userName").value;
  addUser(userName);
});
document.getElementById("deleteUserBtn").addEventListener("click", () => {
  const userName = document.getElementById("userName").value;
  deleteUSer(userName);
});
document.getElementById("updateUserBtn").addEventListener("click", () => {
  const userName = document.getElementById("userName").value;
  const newInfo = document.getElementById('newUserInfo').value
  UpdateUser(userName,newInfo);
});
