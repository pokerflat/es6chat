import { spanEnter, spanRegistration, settingButton } from "./uielements.js";

spanEnter.onclick = function () {
  modalAuth.style.display = "block";
};

spanRegistration.onclick = function () {
  modalAuth.style.display = "none";
};

settingButton.onclick = function () {
  modalSettings.style.display = "block";
};
