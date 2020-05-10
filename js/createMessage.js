import { inputUser } from "./uielements.js";

export let hourMin = new Date().toString().substr(16, 5);

export function createUIMessage(msg) {
  let Message = document.createElement("div");
  let time = document.createElement("div");
  let container = document.createElement("div");
  let status = document.createElement("div");

  if (msg.username === inputUser.value) {
    Message.setAttribute("id", "user-name-message");
    container.setAttribute("id", "container-user");
  } else {
    Message.setAttribute("id", "partner-name-message");
    container.setAttribute("id", "container-partner");
  }
  time.setAttribute("id", "time-style");

  time.innerText = hourMin;
  Message.innerText = msg.username + ": " + msg.message;
  status.innerText = "Отправлено";
  status.setAttribute("id", "statusMessage");
  container.appendChild(Message);
  container.appendChild(time);
  container.appendChild(status);
  document.getElementById("main-field").appendChild(container);
}
