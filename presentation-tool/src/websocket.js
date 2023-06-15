const socketio = require('socket.io');
const http = require('http');
const server = http.createServer();
const io = socketio(server);

server.listen(3001, () => {
  console.log('Websocket server running on port 3001');
});

io.on('connection', (socket) => {
  console.log('New websocket connection');
  socket.on('slideChanged', (slideIndex) => {
    socket.broadcast.emit('slideChanged', slideIndex);
  });
});