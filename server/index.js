var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8800);

function handler (req, res) {
  fs.readFile('../index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
}

function welcomeText(socket) {
  socket.emit('message_to_client', { message: 'Hi my friend o/ Good luck!', user: 'chatBot2000' });
}

io.on('connection', function (socket) {
  setInterval(welcomeText, 15000, socket);
  console.log('Подключено!');   // Добавил для понимания, что подключились

  socket.on('message_to_server', function (data) {
    console.log(data);    // Добавил для понимания, что вывводится в консоль сервера
    socket.emit('message_to_client', { message: data.message, user: data.user });
  });
});