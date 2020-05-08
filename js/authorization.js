import "./localstorage.js";
import { inputLoginAuth, inputPasswordAuth, inputUser } from "./uielements.js";
import "./apiClient.js";
import "./popup.js";
import { hideAllPopup } from "./chatView.js";
import { apiRequest } from "./apiClient.js";

userAuthorization.onclick = function () {
  AuthUser(inputLoginAuth.value, inputPasswordAuth.value);
  hideAllPopup();
};

export async function AuthUser(username, password) {
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
  location.reload();
}
