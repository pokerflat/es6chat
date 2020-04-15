import { inputMsg, inputUser } from "./uielements.js";

window.onload = function () {
  let msgFromStorage = localStorage.getItem("StorageMessage", inputMsg.value);
  let usernameFromStorage = localStorage.getItem(
    "StorageUsername",
    inputUser.value
  );
  if (msgFromStorage != "") {
    inputMsg.value = msgFromStorage;
  }
  inputUser.value = usernameFromStorage;
};

message.oninput = function () {
  localStorage.setItem("StorageMessage", inputMsg.value);
};
