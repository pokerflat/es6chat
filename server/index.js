var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  res.writeHead(200);
}

function welcomeText(socket) {
  socket.emit('message', { message: 'Hi my friend o/ Good luck!', user: 'chatBot2000' });
}

io.on('connection', function (socket) {
  setInterval(welcomeText, 5000, socket);

  socket.on('message', function (data) {
    console.log(data);   
     socket.emit('message', { message: data.message, user: data.user });
  });
});