import { serverURL } from "./config.js";

const payload = {
  username: "alex335",
  password: 1234,
};

const apiRequest = async (url, config) => {
  try {
    const res = await fetch(serverURL + url, config);
    return res.json();
  } catch (err) {
    console.log("Ошибка", err);
  }
};

async function getUser() {
  const params = "username=" + payload.username;
  const data = await apiRequest("/api/user?" + params);
  console.log(data);
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
}

function validateUser() {
  if (payload.username.length >= 5) {
    if (getUser()) {
      alert("Такое имя уже есть");
    } else {
      createUser(payload);
    }
  } else {
    alert("Имя меньше 5 символов");
  }
}
validateUser();
