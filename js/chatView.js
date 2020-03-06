import {socket} from './client.js';

socket.on('message', function (data) {
    let newDivBot=document.createElement('div');
    newDivBot.innerHTML=(data.user+': '+data.message.trim());
    document.getElementById('main_field').appendChild(newDivBot);
    }    
); 