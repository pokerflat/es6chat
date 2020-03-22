import { URL } from "./config.js";

try {
  fetch(URL, { mode: "no-cors" }).then(data => {
    console.log(data);
  });
} catch (err) {
  console.log("Ошибка!");
}
