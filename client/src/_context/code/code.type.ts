export interface CodeState {
    code: string ;
    loading: boolean;
    output: object | null;
    updateCode: (code: string) => void;
    submitCode: (code: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
