import mongoose, { Document, Schema } from 'mongoose';

interface IRoom extends Document {
    roomName: string;
}

const RoomSchema: Schema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
});

const Room = mongoose.model<IRoom>('Room', RoomSchema);
export default Room;
