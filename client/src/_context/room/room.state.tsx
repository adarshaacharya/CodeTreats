import { message } from 'antd';
import socket from 'config/socket/socket';
import * as React from 'react';
import {
    CREATE_ROOM,
    JOIN_ROOM,
    SET_LOADING,
    UPDATE_ROOM_OUTPUT,
    UPDATE_ROOM_CODE,
    UPDATE_ROOM_INPUT,
    UPDATE_ROOM_LANGUAGE,
    SET_CURRENT_USER,
    UPDATE_ROOM_MESSAGES,
    LEAVE_ROOM,
} from '_context/types';
import RoomContext from './room.context';
import roomReducer, { initialState as initialValues } from './room.reducer';
import { IOutput, IRoom, State, IMessages } from './room.type';
import history from 'utils/history';
import { SOCKETS_EVENT_CREATE_ROOM, SOCKETS_EVENT_UPDATE_ROOM, SOCKETS_EVENT_USER_JOINED } from 'constants/socketEvents';

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
            socket.emit(SOCKETS_EVENT_CREATE_ROOM, body);

            socket.on(SOCKETS_EVENT_UPDATE_ROOM, (room: IRoom) => {
                dispatch({
                    type: CREATE_ROOM,
                    payload: room,
                });
                history.push(`/room/${room._id}`);
                message.success('New room created ! 🔥 ');
            });
            setRoomUser(username); // set username in state
        } catch (error) {
            console.error(error);
        }
    };

    // join room
    const joinRoom = (values: { username: string; roomID: string }) => {
        try {
            const { username, roomID } = values;
            const body = {
                username,
                roomID,
            };
            socket.emit(SOCKETS_EVENT_USER_JOINED, body, (error: any) => {
                //callback fun
                if (error) {
                    return message.error(error.msg);
                }
            });

            setRoomUser(username); // set username in state

            socket.on(SOCKETS_EVENT_UPDATE_ROOM, (room: IRoom) => {
                dispatch({
                    type: JOIN_ROOM,
                    payload: room,
                });
                message.success('You have joined the room. 🥳');

                history.push(`/room/${roomID}`);
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

    // update output
    const updateRoomOutput = (output: IOutput) => {
        dispatch({
            type: UPDATE_ROOM_OUTPUT,
            payload: output,
        });
    };

    //  update messsages
    const updateMessages = (message: IMessages) => {
        dispatch({
            type: UPDATE_ROOM_MESSAGES,
            payload: message,
        });
    };

    // set user in state
    const setRoomUser = (username: string) => {
        dispatch({
            type: SET_CURRENT_USER,
            payload: username,
        });
    };

    // set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        });
    };

    //leave room
    const leaveRoom = () => {
        dispatch({
            type: LEAVE_ROOM,
        });
    };

    return (
        <RoomContext.Provider
            value={{
                _id: state._id,
                roomName: state.roomName,
                currentUser: state.currentUser,
                activeUsers: state.activeUsers,
                roomCode: state.roomCode,
                roomLanguage: state.roomLanguage,
                roomInput: state.roomInput,
                roomOutput: state.roomOutput,
                roomLoaded: state.roomLoaded,
                roomMessages: state.roomMessages,
                loading: state.loading,
                createRoom,
                joinRoom,
                updateRoomCode,
                updateRoomInput,
                updateRoomLanguage,
                updateRoomOutput,
                updateMessages,
                setLoading,
                setRoomUser,
                leaveRoom,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export default RoomState;
