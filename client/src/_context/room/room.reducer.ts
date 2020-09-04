import {
    CREATE_ROOM,
    JOIN_ROOM,
    UPDATE_ROOM,
    UPDATE_ROOM_CODE,
    UPDATE_ROOM_LANGUAGE,
    UPDATE_ROOM_INPUT,
} from '_context/types';
import { Action, State } from './room.type';
import getTemplate from 'config/editor/examples';

export const initialState: State = {
    _id: '',
    roomName: '',
    activeUsers: [],
    roomCode: '',
    roomInput: '',
    roomLanguage: 'javascript',
    roomOutput: {
        stderr: null,
        stdout: null,
    },
    roomLoaded: null, // checks if room is loaded or not for route handling
    loading: false,

    createRoom: () => null,
    joinRoom: () => null,

    submitRoomCode: () => null,
    updateRoomCode: () => null,
    updateRoomInput: () => null,
    updateRoomLanguage: () => null,
};

//reducer
export default function roomReducer(state: State = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ROOM:
            return {
                ...state,
                _id: payload._id,
                roomName: payload.roomName,
                activeUsers: payload.activeUsers,
                ...state.activeUsers,
                roomLoaded: true,
            };

        case JOIN_ROOM:
            return {
                ...state,
                _id: payload._id,
                roomName: payload.roomName,
                activeUsers: payload.activeUsers,
                ...state.activeUsers,
                roomLoaded: true,
            };

        case UPDATE_ROOM:
            return {
                ...state,
                room: payload,
                roomLoaded: true,
            };

        case UPDATE_ROOM_CODE:
            return {
                ...state,
                roomCode: payload,
            };

        case UPDATE_ROOM_LANGUAGE:
            return {
                ...state,
                roomLanguage: payload,
            };

        case UPDATE_ROOM_INPUT:
            return {
                ...state,
                roomInput: payload,
            };
        default:
            return state;
    }
}
