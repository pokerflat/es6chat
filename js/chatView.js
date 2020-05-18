
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser, inputChatname, chat } from "./uielements.js";
import { changeName, getOldMessages } from "./apiClient.js";
import { Message} from "./createMessage.js";

let counterDownloadedMessages = downloadedMessages(); 

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
    .then (inputUser.value=inputChatname.value)
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


function addOldMessagesToChat(counter) {
  getOldMessages(counter).then(data => {
    const { messages } = data;
    let screenHeight = chat.scrollHeight;
    for(let i = 0; i < messages.length; i++) {   
      let oldMessage = document.createElement('div');
      if(messages[i].username === Cookies.get('username')) {
       oldMessage.classList.add('message-output') 
      }
      else {
        oldMessage.classList.add('message-input')
      }
      oldMessage.classList.add('delivered');    
      oldMessage.innerHTML = '<p class="message-text">'+
        messages[i].username + ':  ' +
        messages[i].message + '</p>' +
        '<p class="message-date">' + 
        messages[i].createdAt.slice(11, 16) +
        '</p>';
      chat.prepend(oldMessage);
    }
    if(counter === undefined) {
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    } else {
      chat.scrollTop = chat.scrollHeight - screenHeight;
    }
  })
}

chat.addEventListener('scroll', function() {
  if(chat.scrollTop === 0) {
    addOldMessagesToChat(counterDownloadedMessages())
  }
})

function downloadedMessages() {
  let counter  = 0;
  return function () {
    return counter += 20;
  }
}

addOldMessagesToChat();