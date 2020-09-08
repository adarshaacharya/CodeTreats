import mongoose, { Document, Schema } from 'mongoose';

interface IUsers {
    username: string;
    socketID: string;
}

interface IChat {
    text: string;
    sender: string;
}

interface IRoom extends Document {
    roomName: string;
    activeUsers: IUsers[];
    messages: IChat[];
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

const MessageSchema: Schema = new Schema({
    text: {
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
    messages: [MessageSchema],
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);
export default Room;
