import { socket } from "./client.js";
import "./localstorage.js";
import "./uielements.js";
import "./apiClient.js";
import "./login.js";
import { inputMsg, inputUser, inputFile } from "./uielements.js";
import { createUIMessage } from "./chatView.js";

socket.on("connect", function () {
  console.log("Подключились к серверу");
});

export function msgToChat(socket) {
  socket.emit("message", {
    message: inputMsg.value,
    //username: inputUser.value,
    messageid: "16867960780", // фикс для теста
  });
}

socket.on("message", function (msg) {
  console.log(msg); // хочу понять, что в составе сообщения
  createUIMessage(msg);
});
