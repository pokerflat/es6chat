import { chat, inputMsg } from "./uielements.js";

export class Message {
  constructor(msg, messageType) {
      this.msg = msg
      this.date = new Date()
      this.person = this.msg.user
      this.messageType = messageType
      this.messageId = this.msg.messageId
  }
    addMessageToChat() {
      let newMessage = document.createElement('div')

      if (this.messageType == 'output') {
          newMessage.classList.add('message-output')
          newMessage.classList.add('sended')
          newMessage.setAttribute('id', this.messageId)
      } else {
          newMessage.classList.add('message-input')
          this.person = this.msg.chatname
      }
        
      newMessage.innerHTML = '<p class="message-text">'+
          this.person + ':  ' +
          this.msg.message + '</p>' +
          '<p class="message-date">' + 
          this.date.toTimeString().slice(0,5) +
          '</p>';
      chat.append(newMessage);
      inputMsg.value = '';
  }
}
