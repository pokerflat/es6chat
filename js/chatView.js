import { socket } from "./client.js";
import { isMsgNotEmpty } from "./validation.js";
import { msgToChat } from "./chatController.js";
import { inputMsg, inputUser } from "./uielements.js";

export function createUIMessage(msg) {
  let newMessage = document.createElement("div");
  let mytime = document.createElement("div");
  let container = document.createElement("div");

  if (msg.user == inputUser.value) {
    newMessage.setAttribute("id", "user_name_message");
    container.setAttribute("id", "container_user");
  } else {
    newMessage.setAttribute("id", "bot_name_message");
    container.setAttribute("id", "container_bot");
  }
  mytime.setAttribute("id", "time_style");
  let hourMin = new Date().toString().substr(16, 5);
  mytime.innerText = hourMin;
  newMessage.innerText = msg.user + ": " + msg.message.trim() + msg.file;
  container.appendChild(newMessage);
  container.appendChild(mytime);
  document.getElementById("main_field").appendChild(container);
}

send_button.onclick = function() {
  if (isMsgNotEmpty(inputMsg)) {
    msgToChat(socket);
  }
};
