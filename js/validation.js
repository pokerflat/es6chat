import { inputMsg, inputUser } from "./uielements.js";
import { socket } from "./client.js";

export function isMsgNotEmpty(inputMsg) {
  if (inputMsg.value.length) {
    return true;
  }
}
