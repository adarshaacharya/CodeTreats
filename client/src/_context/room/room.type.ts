export interface IUser {
    username: string;
}

export interface State {
    roomName: string;
    users: IUser[];
}

export interface Action {
    payload?: any;
    type: string;
}
