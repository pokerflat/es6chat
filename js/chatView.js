 
   export function createUIMessage(msg){
              let newMessage=document.createElement('div');
              newMessage.innerText=(msg.user+': '+msg.message.trim());
              document.getElementById('main_field').appendChild(newMessage);
   }