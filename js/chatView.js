
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser, inputChatname } from "./uielements.js";
import { changeName } from "./apiClient.js";
import { hourMin} from "./createMessage.js";

export function checkMessageId(msg) {
  if ((msg.messageId = msg.username + msg.createdAt)) {
    let newStatus = document.getElementById("statusMessage");
    newStatus.innerText = "Доставлено";
  }
}

sendButton.onclick = function () {
  const msg = {
    message: inputMsg.value,
    user: inputUser.value,
    messageId: createMessageId()
  }
  if (isMsgNotEmpty(inputMsg)) {
       msgToChat(msg);
  }
};

export function hideAllPopup() {

  modalAuth.classList.add('modal-hide');
  modalLogIn.classList.add('modal-hide');
  modalSettings.classList.add('modal-hide');
}

applyNameButton.onclick = function () {
  changeName(inputChatname.value)
    .then ( localStorage.setItem("username", inputChatname.value))
    .then ( modalSettings.classList.remove('modal-show'))
    .then (hideAllPopup())
    .catch(alert)  
 };

logoutButton.onclick = function () {
  Cookies.remove("at");
  location.reload();
};

export function createMessageId() {
  return localStorage.getItem("username") + hourMin;
}

