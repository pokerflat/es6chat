import { serverURL } from "./config.js";
import {
  inputUser,
  inputLogin,
  inputPassword,
  inputLoginAuth,
  inputPasswordAuth,
} from "./uielements.js";

let payload = {
  username: inputLogin.value,
  password: inputPassword.value,
};

let payloadAuth = {
  username: inputLoginAuth.value,
  password: inputPasswordAuth.value,
};

const apiRequest = async (url, config) => {
  try {
    const res = await fetch(serverURL + url, config);
    if (res.status === 400) {
      alert("Такой пользователь уже есть");
    }
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
  const data = await apiRequest("/api/user", config);
  return data;
}

function makeUserFromPopup() {
  payload.username = inputLogin.value;
  payload.password = inputPassword.value;
  if (validateUser()) {
    createUser(payload);
  }
}

function validateUser() {
  if (payload.username.length >= 2 && payload.password.length >= 4) {
    return true;
  }
}

createUserAccaunt.onclick = function () {
  makeUserFromPopup();
};

async function AuthUser() {
  payloadAuth.username = inputLoginAuth.value;
  payloadAuth.password = inputPasswordAuth.value;
  inputUser.value = payloadAuth.username;
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloadAuth),
  };
  const data = await apiRequest("/api/user/auth", config);
  document.cookie = data.token;
  localStorage.setItem("StorageUsername", inputUser.value);
}

userAuthorization.onclick = function () {
  AuthUser();
  hideAllPopup();
};

function getCookie() {
  if (document.cookie) {
    hideAllPopup();
  }
}

getCookie();

function hideAllPopup() {
  modalAuth.style.display = "none";
  modalLogIn.style.display = "none";
}
