import { socket } from "./client.js";
import "./localstorage.js";
import  "./uielements.js";
import "./apiClient.js";
import {  hideAllPopup } from "./chatView.js";


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
    updateStatus(msg);
  });
}

addMessageToChat();

function updateStatus(msg) {
  const outputMessage = document.getElementById(msg.messageId);
  if (msg.messageId === outputMessage.id) {
    outputMessage.classList.remove('sended')
    outputMessage.classList.add('delivered')
  }
}
