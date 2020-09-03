import { JOIN_ROOM, CREATE_ROOM, UPDATE_ROOM, UPDATE_ROOM_CODE } from '_context/types';

import { Action, State } from './room.type';
import getTemplate from 'config/editor/examples';

export const initialState: State = {
    _id: '',
    activeUsers: [],
    roomCode: '',
    roomInput: '',
    roomLanguage: '',
    roomName: '',
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
                ...payload,
                roomLoaded : true
            };

        case JOIN_ROOM:
            return {
                ...state,
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
                room: payload,
            };

        default:
            return state;
    }
}
