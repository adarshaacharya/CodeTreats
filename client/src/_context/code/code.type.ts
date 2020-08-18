interface IOutput {
    stdout: string | null;
    stderr: string | null;
}

export interface ISnippet {
    _id?: string;
    title: string;
    sourceCode: string | null;
    language: string;
    date?: Date;
}

export interface State {
    code: string | null;
    input: string | null;
    language: string;
    loading: boolean;
    output: IOutput;
    snippets: ISnippet[];

    updateCode: (code: string) => void;
    updateInput: (input: string) => void;
    updateLanguage: (lang: string) => void;
    submitCode: (code: string, language: string, input: string) => void;
    fetchSnippets: () => void;
    fetchSnippetbyId: (sid: string) => void;
    addSnippet: (snippet: ISnippet) => void;
    filterSnippets: (text: string) => void;
    clearFilter: () => void;
}

export interface Action {
    payload?: any;
    type: string;
}
