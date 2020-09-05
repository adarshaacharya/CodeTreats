import mongoose, { Document, Schema } from 'mongoose';

interface IUsers {
    username: string;
    socketID: string;
}

interface IChat {
    message: string;
    sender: string;
}

interface IRoom extends Document {
    roomName: string;
    activeUsers: IUsers[];
    chat: IChat[];
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    socketID: {
        type: String,
        required: true,
    },
});

const ChatSchema: Schema = new Schema({
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
});

const RoomSchema: Schema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    activeUsers: [UserSchema],
    messages: [ChatSchema],
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);
export default Room;
