import { inputMsg, inputUser } from "./uielements.js";

window.onload = function () {
  let msgFromStorage = localStorage.getItem("Message", inputMsg.value);
  let usernameFromStorage = localStorage.getItem(
    "username",
    inputUser.value
  );
  if (msgFromStorage != "") {
    inputMsg.value = msgFromStorage;
  }
  inputUser.value = usernameFromStorage;
  modalSettings.classList.add('modal-hide')
};

message.oninput = function () {
  localStorage.setItem("Message", inputMsg.value);
};
