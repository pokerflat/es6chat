 
   export function makeElement(data){
              let newMessage=document.createElement('div');
              newMessage.innerText=(data.user+': '+data.message.trim());
              document.getElementById('main_field').appendChild(newMessage);
   }