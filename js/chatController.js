import { socket } from "./client.js";
import "./localstorage.js";
import "./uielements.js";
import "./apiClient.js";
import {  hideAllPopup, checkMessageId } from "./chatView.js";
import { createUIMessage } from "./createMessage.js";

function checkAuth () {
  if (Cookies.get("at")) {                       
    hideAllPopup();  
  }
}

checkAuth (); 


export function msgToChat(msg) {
  socket.emit("message", msg)
}

function addMessageToChat() { 
    socket.on("message", function (msg) {
      createUIMessage(msg);
      checkMessageId(msg);
    });
}

addMessageToChat();


export function sendMessage(textMessage, id) {
  socket.emit('message', { message: textMessage, messageId: id});
  inputMessage.clear();
}
