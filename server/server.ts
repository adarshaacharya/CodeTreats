// env variable config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import socketio from './controllers/room.controller';
import http from 'http';
import app from './app';
import connectDB from './database/init';

// db
connectDB();

//socket server
const server = http.createServer(app);
socketio(server)


const hostname = 'localhost';
const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`✅  Listening on: http://${hostname}:${PORT}`);

server.listen(PORT, handleListening);
