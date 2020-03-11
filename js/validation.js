
import {inputMsg, inputUser} from './uielements.js';
import {socket} from './client.js';

export function validation (inputMsg) {
    if (inputMsg.value.length==0) {
        alert('Сообщение пустое');
    }
}

