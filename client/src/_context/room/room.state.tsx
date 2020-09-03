import { message } from 'antd';
import socket from 'config/socket/socket';
import * as React from 'react';
import { UPDATE_ROOM } from '_context/types';
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
                    type: UPDATE_ROOM,
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
                    type: UPDATE_ROOM,
                    payload: room,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

    // update room code
    const updateRoomCode = (code: string) => {};

    //submit room code
    const submitRoomCode = async (code: string, languagage: string, input: string) => {};

    // update input
    const updateRoomInput = (input: string) => {};

    // update room lang
    const updateRoomLanguage = (lang: string) => {};

    return (
        <RoomContext.Provider
            value={{
                room: state.room,
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
