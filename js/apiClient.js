import { URL } from "./config.js";

async function apiRequest(URL, method, params) {
  const config = {
    method: method,
  };
  try {
    const res = await fetch(URL + "/api/user?" + params, config);
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.log("Ошибка", err);
  }
}

apiRequest(URL, "get", "username=Jonh");

async function createUser(URL) {
  const payload = {
    username: "alex",
    password: 1234,
  };

  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const data = await fetch(URL + "/api/user", config);
  console.log(data);
}
createUser(URL);
