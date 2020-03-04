var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  res.writeHead(200);
}

function welcomeText(socket) {
  socket.emit('messageToClient', { message: 'Hi my friend o/ Good luck!', user: 'chatBot2000' });
}

io.on('connection', function (socket) {
  setInterval(welcomeText, 1500, socket);
  console.log('Подключено!');   // Добавил для понимания, что подключились

  socket.on('messageToServer', function (data) {
    console.log(data);    // Добавил для понимания, что вывводится в консоль сервера
    socket.emit('messageToClient', { message: data.message, user: data.user });
  });
});