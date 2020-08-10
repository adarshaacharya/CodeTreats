export interface Output {
    stdout: string | null;
    stderr: string | null;
}

export interface State {
    code: string | null;
    language: string;
    loading: boolean;
    output: Output;

    updateCode: (ev: any, code: string) => void;
    updateLanguage: (lang: string) => void;
    submitCode: (code: string, language: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
