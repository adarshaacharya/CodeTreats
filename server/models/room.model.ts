import mongoose, { Document, Schema } from 'mongoose';

type IUsers = {
    username: string;
    socketID: string;
};

interface IRoom extends Document {
    roomName: string;
    activeUsers: IUsers[];
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

const RoomSchema: Schema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    activeUsers: [UserSchema],
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);
export default Room;
