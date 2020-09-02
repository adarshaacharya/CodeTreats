import socket from 'config/socket/socket';
import * as React from 'react';
import RoomContext from './room.context';
import roomReducer, { initialState as initialValues } from './room.reducer';
import { State } from './room.type';

const RoomState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(roomReducer, initialState);

    // create room
    const createRoom = (values: { username: string; roomName: string }) => {
        try {
            const { username, roomName } = values;
            const body = {
                username,
                roomName,
            };
            socket.emit('create:room', body);

            socket.on('update:room', (room: any) => {
                console.log(room);
                const { roomName, users, _id: roomID } = room;
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RoomContext.Provider
            value={{
                room: state.room,
                createRoom,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomState;
