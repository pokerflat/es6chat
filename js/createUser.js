import "./localstorage.js";
import "./uielements.js";
import { createUser } from "./apiClient.js";
import "./popup.js";
import { AuthUser } from "./authorization.js";
import { inputUser, inputLogin, inputPassword } from "./uielements.js";
import { hideAllPopup } from "./chatView.js";
import { validateUser } from "./validation.js";

export let username, password;

createUserAccaunt.onclick = function () {
  makeUserFromPopup();
};

function makeUserFromPopup() {
  username = inputLogin.value;
  password = inputPassword.value;
  if (!validateUser()) {
    return}
    createUser({ username, password }).then(data => {
      AuthUser(username, password)
      .catch (console.error('Не авторизовался')
      )
    });
    inputUser.value = username;
    hideAllPopup();
}
