import { message } from 'antd';
import socket from 'config/socket/socket';
import * as React from 'react';
import { UPDATE_ROOM, CREATE_ROOM, JOIN_ROOM, UPDATE_ROOM_CODE } from '_context/types';
import RoomContext from './room.context';
import roomReducer, { initialState as initialValues } from './room.reducer';
import { IRoom, State } from './room.type';

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

            socket.on('update:room', (room: IRoom) => {
                dispatch({
                    type: CREATE_ROOM,
                    payload: room,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    // create room
    const joinRoom = (values: { username: string; roomID: string }) => {
        try {
            const { username, roomID } = values;
            const body = {
                username,
                roomID,
            };
            socket.emit('join:room', body, (error: any) => {
                if (error) {
                    message.error(error.msg);
                }
            });
            socket.on('update:room', (room: IRoom) => {
                dispatch({
                    type: JOIN_ROOM,
                    payload: room,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    // update room code
    const updateRoomCode = (code: string, roomID: string) => {
        console.log(code , "code")
        dispatch({
            type: UPDATE_ROOM_CODE,
            payload: code,
        });
    };

    //submit room code
    const submitRoomCode = async (code: string, languagage: string, input: string) => {};

    // update input
    const updateRoomInput = (input: string) => {};

    // update room lang
    const updateRoomLanguage = (lang: string) => {};

    return (
        <RoomContext.Provider
            value={{
                _id: state._id,
                activeUsers: state.activeUsers,
                roomCode: state.roomCode,
                roomInput: state.roomInput,
                roomLanguage: state.roomLanguage,
                roomName: state.roomName,
                roomOutput: state.roomOutput,
                roomLoaded: state.roomLoaded,
                loading: state.loading,
                createRoom,
                joinRoom,
                submitRoomCode,
                updateRoomCode,
                updateRoomInput,
                updateRoomLanguage,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomState;
