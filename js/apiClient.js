import { serverURL } from "./config.js";
import { inputLogin } from "./uielements.js";

const payload = {
  username: inputLogin.value,
  password: 1234,
};

const apiRequest = async (url, config) => {
  try {
    const res = await fetch(serverURL + url, config);
    if (res.status === 400) {
      console.log("Такой пользователь уже есть");
    }
    return res.json();
  } catch (err) {
    console.log("Ошибка", err);
  }
};

async function getUser(username) {
  const params = "username=" + username;
  const data = await apiRequest("/api/user?" + params);
  console.log(data);
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
  console.log(data);
  return data;
}

function makeUserFromPopup() {
  if (validateUser()) {
    createUser(payload);
  } else {
    console.log("Имя меньше 2 символов");
  }
}

function validateUser() {
  if (payload.username.length >= 2) {
    return true;
  }
}

create_button.onclick = function () {
  const payload = {
    username: inputLogin,
  };
  makeUserFromPopup();
  event.preventDefault();
};
