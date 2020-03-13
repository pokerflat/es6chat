import {socket} from './client.js';
import './localstorage.js';
import './uielements.js';
import {inputMsg, inputUser} from './uielements.js';
import {createUIMessage} from './chatView.js';

socket.on('connect', function() {
    console.log('Подключились к серверу');
});

export function msgToChat(socket) {
    socket.emit('message', {message: inputMsg.value, user: inputUser.value});
}

export function msgToChat11(socket) {
    socket.on('message', function (data) {});
}

socket.on('message', function (msg) {    
    createUIMessage(msg);
}
); 


