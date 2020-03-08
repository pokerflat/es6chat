import {socket} from './client.js';
import {prepareMsg} from './preparemsg.js';
import './chatView.js';
import './localstorage.js';

socket.on('connect', function() {
    console.log('Подключились к серверу');
});

send_button.onclick = function() {         
    prepareMsg (); 
}    



