import {inputMsg, inputUser} from './uielements.js';

window.onload=function() {
    let valueLocal=localStorage.getItem('key',inputMsg.value);
    inputMsg.value=valueLocal;
} 

message.oninput = function() { 
    localStorage.setItem('key', inputMsg.value);
}