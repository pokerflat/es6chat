import { enterButton, spanRegistration, settingButton } from "./uielements.js";

enterButton.onclick = function () {
 modalAuth.classList.remove('modal-hide')
 modalAuth.classList.add('modal-show')
};

spanRegistration.onclick = function () {
  modalAuth.classList.add('modal-hide')
};

settingButton.onclick = function () {
  modalSettings.classList.remove('modal-hide')
  modalSettings.classList.add('modal-show');
};
