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

function makeUserFromPopup() {
  payload.username = inputLogin.value;
  payload.password = inputPassword.value;
  inputUser.value = payload.username;
  if (validateUser()) {
    createUser(payload).then((data) => {
      console.log(data);
      AuthUser();
    });
    localStorage.setItem("StorageUsername", inputUser.value);
  }
}

function validateUser() {
  if (payload.username.length >= 2 && payload.password.length >= 4) {
    return true;
  }
}

createUserAccaunt.onclick = function () {
  makeUserFromPopup();
  hideAllPopup();
};

async function AuthUser() {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputLoginAuth.value,
      password: inputPasswordAuth.value,
    }),
  };
  const data = await apiRequest("/api/user/auth", config);

  Cookies.set("token", data.token);
}

userAuthorization.onclick = function () {
  AuthUser();
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
  changeName();
  hideAllPopup();
};

async function changeName() {
  let payloadNewChatname = { chatname: "vasya1" };
  const config = {
    method: "patch",
    headers: {
      Authorization: Cookies.get("token"),
    },
    body: JSON.stringify(payloadNewChatname),
  };
  const data = await apiRequest("/api/user", config);
  console.log(data);
}
