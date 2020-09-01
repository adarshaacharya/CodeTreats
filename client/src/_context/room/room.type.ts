export interface IUser {
    username: string;
}

export interface State {
    roomName: string;
    users: IUser[];

    createRoom: (roomName: string, username: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
