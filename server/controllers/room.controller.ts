import socketIO from 'socket.io';
import mongoose from 'mongoose';
import Room from '../models/room.model';

const socketio = (server: any) => {
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
                room.activeUsers.unshift(user);
                room = await room.save();

                //  create a room for sockets withn our game (socket room)
                const roomID = room._id.toString(); // create room id
                socket.join(roomID); // join socket(user) in that room ID -> socket(user) is in that room

                io.to(roomID).emit('update:room', room); // tell io server to send this to every server within room
            } catch (error) {
                console.log(error, 'Error in creating room');
            }
        });

        // join a new room
        socket.on('join:room', async (body, callback) => {
            try {
                const { roomID, username } = body;

                if (!mongoose.Types.ObjectId.isValid(roomID)) return callback({ msg: 'Room ID is not valid' });

                let room = await Room.findOne({ _id: roomID });
                if (!room) return callback({ msg: 'Room not found' });

                socket.join(roomID); // join the socket(user) in that room

                let user = {
                    socketID: socket.id,
                    username,
                };
                room.activeUsers.push(user);
                room = await room.save();

                io.to(roomID).emit('update:room', room);
            } catch (error) {
                console.log(error, 'Error in joining room');
            }
        });

        //code change
        socket.on('realtime:code', body => {
            try {
                const { value, roomID } = body;
                io.to(roomID).emit('update:code', value);
            } catch (error) {
                console.log(error);
            }
        });

        // language change
        socket.on('realtime:lang', body => {
            try {
                const { value, roomID } = body;
                io.to(roomID).emit('update:lang', value);
            } catch (error) {
                console.log(error);
            }
        });

        // input change
        socket.on('realtime:input', body => {
            try {
                const { value, roomID } = body;
                io.to(roomID).emit('update:input', value);
            } catch (error) {
                console.log(error);
            }
        });

        // editor theme chaneg
        socket.on('realtime:theme', body => {
            try {
                const { theme, roomID } = body;
                io.to(roomID).emit('update:theme', theme);
            } catch (error) {
                console.log(error);
            }
        });

        socket.on('disconnect', () => {
            console.log('❌ Disconnected from room.');
        });
    });
};

export default socketio;
