import { serverURL } from "./config.js";
import "./chatController.js";
import { inputUser, chat } from "./uielements.js";


export const apiRequest = async (url, config) => {
  try {
    const res = await fetch(serverURL + url, config);
    return res.json();
  } catch (err) {
    console.log("Ошибка", err);
  }
};

export async function createUser(payload) {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return apiRequest("/api/user", config);
}

export async function changeName(chatname) {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("at")}`,
    },
    body: JSON.stringify({ chatname }),
  };
  await apiRequest("/api/user", config);
}

export async function loadAllMessages() {
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("at")}`,
      "Content-Type": "application/json",
    },
  };
  return apiRequest("/api/messages", config);
}



