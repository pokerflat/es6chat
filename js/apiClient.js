import { serverURL } from "./config.js";
import {
  inputUser,
  inputLogin,
  inputPassword,
  inputLoginAuth,
  inputPasswordAuth,
  inputChatname,
} from "./uielements.js";
import { socket } from "./client.js";

let payload = {
  username: inputLogin.value,
  password: inputPassword.value,
};

const apiRequest = async (url, config) => {
  try {
    const res = await fetch(serverURL + url, config);
    return res.json();
  } catch (err) {
    console.log("Ошибка", err);
  }
};

async function getUser(username) {
  const params = "username=" + username;
  const data = await apiRequest("/api/user?" + params);
  return data;
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

let username, password;

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

createUserAccaunt.onclick = function () {
  makeUserFromPopup();
};

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
    console.log(msg); // хочу понять, что в составе сообщения
    createUIMessage(msg);
  });
  hideAllPopup();
};

function checkSession() {
  if (Cookies.get("at")) {
    hideAllPopup();
  }
}

checkSession();

function hideAllPopup() {
  modalAuth.style.display = "none";
  modalLogIn.style.display = "none";
  modalSettings.style.display = "none";
}

logout_button.onclick = function () {
  Cookies.remove("at");
  location.reload();
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
  const data = await apiRequest("/api/user", config);
  inputUser.value = chatname;
}
