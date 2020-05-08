import { socket } from "./client.js";
import "./localstorage.js";
import "./uielements.js";
import "./apiClient.js";
import { inputMsg, inputUser } from "./uielements.js";
import { createMessageId, hideAllPopup, checkMessageId } from "./chatView.js";
import { createUIMessage } from "./createMessage.js";

socket.on("connect", function () {
  console.log("Подключились к серверу");
});

export function msgToChat(socket) {
  socket.emit("message", {
    message: inputMsg.value,
    user: inputUser.value,
    messageId: createMessageId(),
  });
}

function checkSessionAndCreateMessage() {
  if (Cookies.get("at")) {
    hideAllPopup();
    socket.on("message", function (msg) {
      createUIMessage(msg);
      checkMessageId(msg);
    });
  }
}

checkSessionAndCreateMessage();
