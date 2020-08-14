interface Output {
    stdout: string | null;
    stderr: string | null;
}

interface Snippet {
    _id: string;
    title: string;
    sourceCode: string | null;
    language: string;
    date: Date;
}

export interface State {
    code: string | null;
    input: string | null;
    language: string;
    loading: boolean;
    output: Output;
    snippets: Snippet[];

    updateCode: (code: string) => void;
    updateInput: (input: string) => void;
    updateLanguage: (lang: string) => void;
    submitCode: (code: string, language: string, input: string) => void;
    fetchSnippets: () => void;
    fetchSnippetbyId: (sid: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
