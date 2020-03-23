import { socket } from "./client.js";
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser } from "./uielements.js";

export function createUIMessage(msg) {
  let newMessage = document.createElement("div");
  if (msg.user == inputUser.value) {
    newMessage.setAttribute("id", "user_name_message");
  }
  newMessage.innerText = msg.user + ": " + msg.message.trim() + msg.file;
  document.getElementById("main_field").appendChild(newMessage);
}

export function createUIDate(msg) {
  let newData = document.createElement("div");
  newData.setAttribute("id", "user_name_message");
  let hourMin = new Date().toString().substr(16, 5);
  newData.innerText = hourMin;
  document.getElementById("main_field").appendChild(newData);
}

send_button.onclick = function() {
  if (isMsgNotEmpty(inputMsg)) {
    msgToChat(socket);
  }
};
