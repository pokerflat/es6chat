
   let socket = io('http://localhost:8080');

    export function test () {
    console.log('Privet');
   }

    socket.on('connect', function() {
    console.log('Подключились к серверу');
    });
    

  
    socket.on('message_to_client', function (data) {
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

        message.message=document.getElementById('message').value;   
        message.user=document.getElementById('chatname').value; 
        socket.emit('message_to_server', {message: message.message, user: name});
        console.log(message);
        
        
    
        function createUserMsg() {
            let newDiv=document.createElement('div');
            newDiv.innerHTML=(message.user+': '+message.message);
            document.getElementById('main_field').appendChild(newDiv);
        }

        createUserMsg();   
        

    };  

