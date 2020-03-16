export function createUIMessage(msg) {
  let newMessage = document.createElement("div");
  newMessage.setAttribute("id", "user_name_message");
  newMessage.innerText = msg.user + ": " + msg.message.trim() + msg.file;
  document.getElementById("main_field").appendChild(newMessage);
}
