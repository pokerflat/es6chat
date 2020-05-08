import { socket } from "./client.js";
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser, inputChatname } from "./uielements.js";
import { changeName } from "./apiClient.js";
import { hourMin, createUIMessage } from "./createMessage.js";

export function checkMessageId(msg) {
  if ((msg.messageId = msg.username + msg.createdAt)) {
    let newStatus = document.getElementById("statusMessage");
    newStatus.innerText = "Доставлено";
  }
}

send_button.onclick = function () {
  if (isMsgNotEmpty(inputMsg)) {
    msgToChat(socket);
  }
};

export function hideAllPopup() {
  modalAuth.style.display = "none";
  modalLogIn.style.display = "none";
  modalSettings.style.display = "none";
}

apply_name_button.onclick = function () {
  changeName(inputChatname.value);
  localStorage.setItem("StorageUsername", inputChatname.value);
  hideAllPopup();
};

logout_button.onclick = function () {
  Cookies.remove("at");
  location.reload();
};

export function createMessageId() {
  let messageId = localStorage.getItem("username") + hourMin;
  return messageId;
}
