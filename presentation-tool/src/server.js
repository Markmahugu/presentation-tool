const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// set up static files
app.use(express.static('public'));

// set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/presentationView.html');
});

// set up socket.io
io.on('connection', (socket) => {
  console.log('New socket connection');
  socket.on('slideChanged', (slideIndex) => {
    socket.broadcast.emit('slideChanged', slideIndex);
  });
});