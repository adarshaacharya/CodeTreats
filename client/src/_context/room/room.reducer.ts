import { JOIN_ROOM, CREATE_ROOM } from '_context/types';

import { Action, State } from './room.type';

export const initialState: State = {
    roomName: '',
    users: [],

    createRoom: () => null,
};

//reducer
export default function roomReducer(state: State = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ROOM:
            return {
                ...state,
            };

        case JOIN_ROOM:
            return {
                ...state,
            };

        default:
            return state;
    }
}
