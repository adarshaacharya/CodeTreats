export interface Output {
    stdout: string | null;
    stderr: string | null;
}

export interface State {
    code: string | null;
    loading: boolean;
    output: Output;
    updateCode: (code: string) => void;
    submitCode: (code: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
