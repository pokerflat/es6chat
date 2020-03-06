
import {inputMsg, inputUser} from './uielements.js';
import {socket} from './client.js';

export function prepareMsg () {
    if (inputMsg.value.length==0) {
        alert('Сообщение пустое');
    }
    else {
        socket.emit('message', {message: inputMsg.value, user: inputUser.value}); 
        inputMsg.value='';      //очищаем поле после отправки
    }
}