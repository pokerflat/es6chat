import { inputMsg, inputUser } from "./uielements.js";
import { username, password } from "./createUser.js";

export function isMsgNotEmpty(inputMsg) {
  if (inputMsg.value.length && inputUser.checkValidity()) {
    return true;
  }
}

export function validateUser() {
  if (username.length >= 2 && password.length >= 4) {
    return true;
  }
}
