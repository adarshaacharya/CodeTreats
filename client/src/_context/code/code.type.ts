export interface Output {
    stdout: string | null;
    stderr: string | null;
}

export interface State {
    code: string | null;
    input: string | null;
    language: string;
    loading: boolean;
    output: Output;

    updateCode: (ev: Object, code: string) => void;
    updateInput: (input: string) => void;
    updateLanguage: (lang: string) => void;
    submitCode: (code: string, language: string, input: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
