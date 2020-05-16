
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser, inputChatname, chat } from "./uielements.js";
import { changeName, loadAllMessages } from "./apiClient.js";
import { Message} from "./createMessage.js";



sendButton.onclick = function () {
  const msg = {
    message: inputMsg.value,
    user: inputUser.value,
    messageId: createMessageId()
  }
  if (isMsgNotEmpty(inputMsg)) {
       msgToChat(msg);
       let outputMessageFromServer = new Message (msg, 'output');
       outputMessageFromServer.addMessageToChat();
       chat.scrollTop = chat.scrollHeight;
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
  createMessageId.counter++
  let messageId = localStorage.getItem('username')+createMessageId.counter;
  return (messageId);
}
createMessageId.counter = 0

loadAllMessages()
.then(data => {
  const { messages } = data;
  for(let i = messages.length - 1; i >= 0; i--) {  
    let oldMessage = document.createElement('div')
    oldMessage.classList.add('message-output')
    oldMessage.classList.add('delivered');    
    oldMessage.innerHTML = '<p class="message-text">'+
      messages[i].username + ':  ' +
      messages[i].message + '</p>' +
      '<p class="message-date">' + 
      messages[i].createdAt.slice(11, 16) +
      '</p>';
   chat.append(oldMessage);
  }
})
.catch(alert)
