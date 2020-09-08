export interface IUser {
    username: string;
    socketID: string;
    _id: string;
}

export interface IOutput {
    stdout: string | null;
    stderr: string | null;
}

export interface IRoom {
    _id: string;
    roomName: string;
    activeUsers: IUser[];

    roomCode: string; // program
    roomInput: string | null;
    roomLanguage: string;
    roomOutput: IOutput;
}

export interface IMessages {
    text: string;
    sender: string;
    notification?: boolean;
}

export interface State {
    _id: string;
    roomName: string;
    currentUser: string;
    activeUsers: IUser[];
    roomCode: string; // program
    roomInput: string | null;
    roomLanguage: string;
    roomOutput: IOutput;
    roomMessages: IMessages[];
    roomLoaded: boolean | null;
    loading: boolean;

    createRoom: (values: { username: string; roomName: string }) => void;
    joinRoom: (values: { username: string; roomID: string }) => void;

    updateRoomCode: (code: string) => void;
    updateRoomInput: (input: string) => void;
    updateRoomLanguage: (lang: string) => void;
    updateRoomOutput: (output: IOutput) => void;
    updateMessages: (message: IMessages) => void;
    setRoomUser: (username: string) => void;
    setLoading: (roomID: string) => void;
    leaveRoom: () => void;
}

export interface Action {
    payload?: any;
    type: string;
}
