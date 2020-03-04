

   
   import {socket} from './client.js';
  

    function test () {
    console.log('Privet');
   }
   test ();

    socket.on('connect', function() {
    console.log('Подключились к серверу');
    });
    

  
    socket.on('messageToClient', function (data) {
        console.log(data);
        function createBotMsg() {
            let newDivBot=document.createElement('div');
            newDivBot.innerHTML=(data.user+': '+data.message);
            document.getElementById('main_field').appendChild(newDivBot);
        }
        createBotMsg()
    });

    

    send_button.onclick = function() { 

        let message= {
            message: '',
            user: ''
        }; 

        import {message.message, message.user} from './uielements.js';
        
        socket.emit('messageToServer', {message: message.message, user: name});
        console.log(message);
 
        function createUserMsg() {
            let newDiv=document.createElement('div');
            newDiv.innerHTML=(message.user+': '+message.message);
            document.getElementById('main_field').appendChild(newDiv);
        }

        createUserMsg();   
        

    };  

