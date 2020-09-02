export interface IUser {
    username: string;
    socketID: string;
    _id: string;
}
export interface IRoom {
    _id : string;
    roomName: string;
    users: IUser[];
}

export interface State {
    room: IRoom | null;
    createRoom: (values: { username: string; roomName: string }) => void;
}

export interface Action {
    payload?: any;
    type: string;
}

