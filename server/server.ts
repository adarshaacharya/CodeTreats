// env variable config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import socketIO from 'socket.io';
import app from './app';
import connectDB from './database/init';
import Room from './models/room.model';
const http = require('http');

// db
connectDB();

//socket server
const server = http.createServer(app);

const io = socketIO(server);

// socket config
io.on('connection', socket => {
    console.log('✅ Connected to room.');

    // create new room
    socket.on('create:room', async (body: { roomName: string; username: string }) => {
        try {
            const { roomName, username } = body;

            // create db room
            let room = new Room({
                roomName,
            });
            const user = {
                socketID: socket.id, // every socket(user) has unique id
                username,
            };
            room.users.push(user);
            room = await room.save();
            
            //  create a room for sockets withn our game (socket room)
            const roomID = room._id.toString();  // create room id
            socket.join(roomID); // join socket(user) in that room ID -> socket(user) is in that room

            io.to(roomID).emit('update:room', room); // tell io server to send this to every server within room
        } catch (error) {
            console.log(error, 'Error in creating room');
        }
    });

    // join a new room
    socket.on('join:room', async body => {
        try {
            const { roomID } = body;
            const room = await Room.findById(roomID);

            console.log(room);
        } catch (error) {
            console.log(error, 'Error in joining room');
        }
    });

    socket.on('disconnect', () => {
        console.log('❌ Disconnected from room.');
    });
});

const hostname = 'localhost';
const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`✅  Listening on: http://${hostname}:${PORT}`);

server.listen(PORT, handleListening);
