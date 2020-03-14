import { inputMsg, inputUser } from "./uielements.js";

window.onload = function() {
  let valueLocal = localStorage.getItem("key", inputMsg.value);
  if (valueLocal != "") {
    inputMsg.value = valueLocal;
  }
};

message.oninput = function() {
  localStorage.setItem("key", inputMsg.value);
};
