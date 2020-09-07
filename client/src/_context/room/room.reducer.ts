import {
    CREATE_ROOM,
    JOIN_ROOM,
    SET_LOADING,
    UPDATE_ROOM_CODE,
    UPDATE_ROOM_INPUT,
    UPDATE_ROOM_LANGUAGE,
    UPDATE_ROOM_OUTPUT,
    SET_CURRENT_USER,
    UPDATE_ROOM_MESSAGES,
} from '_context/types';
import { Action, State } from './room.type';
import getTemplate from 'config/editor/examples';

export const initialState: State = {
    _id: '',
    roomName: '',
    currentUser: '',
    activeUsers: [],
    roomCode: getTemplate('javascript'),
    roomInput: '',
    roomLanguage: 'javascript',
    roomOutput: {
        stderr: null,
        stdout: null,
    },
    roomMessages: [],
    roomLoaded: null, // checks if room is loaded or not for route handling
    loading: false,

    createRoom: () => null,
    joinRoom: () => null,

    updateRoomCode: () => null,
    updateRoomInput: () => null,
    updateRoomLanguage: () => null,
    updateRoomOutput: () => null,
    updateMessages: () => null,
    setRoomUser: () => null,
    setLoading: () => null,
};

//reducer
export default function roomReducer(state: State = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ROOM:
        case JOIN_ROOM:
            return {
                ...state,
                _id: payload._id,
                roomName: payload.roomName,
                activeUsers: payload.activeUsers,
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
                roomCode: getTemplate(payload),
            };

        case UPDATE_ROOM_INPUT:
            return {
                ...state,
                roomInput: payload,
            };

        case UPDATE_ROOM_OUTPUT:
            return {
                ...state,
                roomOutput: payload,
                loading: false,
            };

        case UPDATE_ROOM_MESSAGES:
            console.log('message from reducer', payload);
            return {
                ...state,
                roomMessages: [...state.roomMessages, payload],
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
}
