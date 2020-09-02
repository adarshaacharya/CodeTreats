import * as React from 'react';
import RoomContext from './room.context';
import roomReducer, { initialState as initialValues } from './room.reducer';
import { State } from './room.type';
import socket from 'config/socket/socket';

const RoomState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(roomReducer, initialState);

    // create room
    const createRoom = (username: string, roomName: string) => {
        try {
            const body = {
                username, 
                roomName 
            };
            socket.emit('create:room', body);
        } catch (error) {
            console.log(error);
        }
    };

    // join  room

    return (
        <RoomContext.Provider
            value={{
                roomName: state.roomName,
                users: state.users,
                createRoom,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomState;
