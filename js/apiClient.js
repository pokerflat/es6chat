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
    localStorage.setItem("StorageUsername", username);
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
  Cookies.set("token", data.token);
  inputUser.value = username;
}

userAuthorization.onclick = function () {
  AuthUser(inputLoginAuth.value, inputPasswordAuth.value);
  hideAllPopup();
};

function checkSession() {
  if (Cookies.get("token")) {
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
  document.cookie = "token=;max-age=0";
  location.reload();
};

apply_name_button.onclick = function () {
  changeName("vasya11");
  hideAllPopup();
};

async function changeName(chatname) {
  const config = {
    method: "patch",
    headers: {
      Authorization: Cookies.get("token"),
    },
    body: JSON.stringify({ chatname }),
  };
  const data = await apiRequest("/api/user", config);
}
