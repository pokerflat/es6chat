


import {socket} from './client.js';
import {inputMsg, inputUser} from './uielements.js';

socket.on('connect', function() {
console.log('Подключились к серверу');
});

socket.on('message', function (data) {
    console.log(data);
    function createBotMsg() {
        let newDivBot=document.createElement('div');
        newDivBot.innerHTML=(data.user+': '+data.message);
        document.getElementById('main_field').appendChild(newDivBot);
    }
    createBotMsg()
});



send_button.onclick = function() { 
    
    //socket.emit('messageToServer', {message: inputMsg.value, user: inputUser.value});

    
};  

/*function createUserMsg() {
    let newDiv=document.createElement('div');
    newDiv.innerHTML=(message.user+': '+message.message);
    document.getElementById('main_field').appendChild(newDiv);
}
createUserMsg();  */

