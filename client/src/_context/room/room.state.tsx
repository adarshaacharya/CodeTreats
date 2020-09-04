import { message } from 'antd';
import socket from 'config/socket/socket';
import * as React from 'react';
import {
    CREATE_ROOM,
    JOIN_ROOM,
    SET_LOADING,
    SUBMIT_ROOM_CODE,
    UPDATE_ROOM_CODE,
    UPDATE_ROOM_INPUT,
    UPDATE_ROOM_LANGUAGE
} from '_context/types';
import RoomContext from './room.context';
import roomReducer, { initialState as initialValues } from './room.reducer';
import { IOutput, IRoom, State } from './room.type';

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
    const updateRoomCode = (code: string) => {
        dispatch({
            type: UPDATE_ROOM_CODE,
            payload: code,
        });
    };

    // update room lang
    const updateRoomLanguage = (lang: string) => {
        dispatch({
            type: UPDATE_ROOM_LANGUAGE,
            payload: lang,
        });
    };

    // update input
    const updateRoomInput = (input: string) => {
        dispatch({
            type: UPDATE_ROOM_INPUT,
            payload: input,
        });
    };

    //submit room code -> @TO BE DELETED
    const submitRoomCode = async (code: string, language: string, input: string, roomID: string) => {
        try {
            // setLoading(roomID); -- testing

            const payload = {
                language,
                sourceCode: code,
                userInput: input,
                roomID: roomID,
            };

            socket.emit('realtime:run', payload);

            socket.on('update:output', (output: IOutput) => {
                dispatch({
                    type: SUBMIT_ROOM_CODE,
                    payload: output,
                });
            });
        } catch (error) {
            console.log(error);
        }
    };

// update output
    const updateRoomOutput =(output : IOutput) => {
        dispatch({
            type : SUBMIT_ROOM_CODE,
            payload : output
        })
    }


    // set loading
    const setLoading = (roomID: string) => {
        console.log(roomID)
        // socket.emit('realtime:loading', roomID); -- test
        // socket.on('update:loading', () => { -- test
            dispatch({
                type: SET_LOADING,
            });
        // }); --test
    };

    return (
        <RoomContext.Provider
            value={{
                _id: state._id,
                roomName: state.roomName,
                activeUsers: state.activeUsers,
                roomCode: state.roomCode,
                roomLanguage: state.roomLanguage,
                roomInput: state.roomInput,
                roomOutput: state.roomOutput,
                roomLoaded: state.roomLoaded,
                loading: state.loading,
                createRoom,
                joinRoom,
                submitRoomCode,
                updateRoomCode,
                updateRoomInput,
                updateRoomLanguage,
                updateRoomOutput,
                setLoading,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomState;
