import { socket } from "./client.js";
import "./localstorage.js";
import "./uielements.js";
import "./apiClient.js";
import "./login.js";
import {
  inputMsg,
  inputUser,
  inputLogin,
  inputPassword,
  inputLoginAuth,
  inputPasswordAuth,
  inputChatname,
} from "./uielements.js";
import { hideAllPopup } from "./chatView.js";
import { apiRequest } from "./apiClient.js";

let username, password;

socket.on("connect", function () {
  console.log("Подключились к серверу");
});

export function msgToChat(socket) {
  socket.emit("message", {
    message: inputMsg.value,
    messageid: "16867960780", // фикс для теста
  });
}

createUserAccaunt.onclick = function () {
  makeUserFromPopup();
};

function makeUserFromPopup() {
  username = inputLogin.value;
  password = inputPassword.value;
  if (validateUser()) {
    createUser({ username, password }).then((data) => {
      console.log(data);
      AuthUser(username, password);
    });
    inputUser.value = username;
    hideAllPopup();
  }
}

function validateUser() {
  if (username.length >= 2 && password.length >= 4) {
    return true;
  }
}

async function createUser(payload) {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return apiRequest("/api/user", config);
}

async function AuthUser(username, password) {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };
  const data = await apiRequest("/api/user/auth", config);
  Cookies.set("at", data.token);
  localStorage.setItem("StorageUsername", username);
  inputUser.value = username;
}

userAuthorization.onclick = function () {
  AuthUser(inputLoginAuth.value, inputPasswordAuth.value);
  socket.on("message", function (msg) {
    createUIMessage(msg);
  });
  hideAllPopup();
};

apply_name_button.onclick = function () {
  changeName(inputChatname.value);
  localStorage.setItem("StorageUsername", inputChatname.value);
  hideAllPopup();
};

async function changeName(chatname) {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("at")}`,
    },
    body: JSON.stringify({ chatname }),
  };
  await apiRequest("/api/user", config);
  inputUser.value = chatname;
}

function checkSession() {
  if (Cookies.get("at")) {
    hideAllPopup();
  }
}

checkSession();

logout_button.onclick = function () {
  Cookies.remove("at");
  location.reload();
};
