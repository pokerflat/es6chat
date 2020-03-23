import { inputMsg, inputUser } from "./uielements.js";

export function isMsgNotEmpty(inputMsg) {
  if (inputMsg.value.length && inputUser.checkValidity()) {
    return true;
  }
}
