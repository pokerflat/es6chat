
import {validation} from './validation.js';
import {msgToChat} from './chatController.js';
import {socket} from './client.js';

send_button.onclick = function() {         
    validation (inputMsg); 
    msgToChat(socket);
}    

export const inputMsg=document.getElementById('message');   
export const inputUser=document.getElementById('username'); 






