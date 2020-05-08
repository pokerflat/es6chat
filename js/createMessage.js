import { inputUser } from "./uielements.js";

export let hourMin = new Date().toString().substr(16, 5);

export function createUIMessage(msg) {
  let newMessage = document.createElement("div");
  let mytime = document.createElement("div");
  let container = document.createElement("div");
  let status = document.createElement("div");

  if (msg.username === inputUser.value) {
    newMessage.setAttribute("id", "user_name_message");
    container.setAttribute("id", "container_user");
  } else {
    newMessage.setAttribute("id", "bot_name_message");
    container.setAttribute("id", "container_bot");
  }
  mytime.setAttribute("id", "time_style");

  mytime.innerText = hourMin;
  newMessage.innerText = msg.username + ": " + msg.message;
  status.innerText = "Отправлено";
  status.setAttribute("id", "statusMessage");
  container.appendChild(newMessage);
  container.appendChild(mytime);
  container.appendChild(status);
  document.getElementById("main_field").appendChild(container);
}
