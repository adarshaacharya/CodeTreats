// env variable config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import socketIO from 'socket.io';
import app from './app';
import connectDB from './database/init';
const http = require('http');

// db
connectDB();

//socket server
const server = http.createServer(app);

const io = socketIO(server);

// socket config
io.on('connection', socket => {
    console.log('a user has connected');

    socket.on('code-change', function (data) {
        io.emit('new-code-char', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const hostname = 'localhost';
const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`✅  Listening on: http://${hostname}:${PORT}`);

server.listen(PORT, handleListening);
