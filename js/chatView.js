import { socket } from "./client.js";

export function createUIMessage(msg) {
  let newMessage = document.createElement("div");

  if (io.on) {
    newMessage.setAttribute("id", "user_name_message");
    console.log("auu");
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
