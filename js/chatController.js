import { socket } from "./client.js";
import "./localstorage.js";
import "./uielements.js";
import { inputMsg, inputUser, inputFile } from "./uielements.js";
import { createUIMessage } from "./chatView.js";
import { createUIDate } from "./chatView.js";

socket.on("connect", function() {
  console.log("Подключились к серверу");
});

export function msgToChat(socket) {
  socket.emit("message", {
    message: inputMsg.value,
    user: inputUser.value,
    file: inputFile
  });
}

socket.on("message", function(msg) {
  createUIMessage(msg);
  createUIDate(msg);
});
