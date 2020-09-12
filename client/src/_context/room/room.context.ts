import * as React from 'react';
import { initialState } from './room.reducer';
import { State } from './room.type';

const DEFAULT_VALUE: State = {
    ...initialState,
};

const RoomContext = React.createContext(DEFAULT_VALUE);
export default RoomContext;


export const useRoomContext = () => {
    return React.useContext(RoomContext);
};

