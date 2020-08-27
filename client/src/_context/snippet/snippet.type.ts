export interface ISnippet {
    _id?: string;
    title: string;
    sourceCode: string | null;
    language: string;
    date?: Date;
}

export interface State {
    snippets: ISnippet[];
    filtered: ISnippet[];

    fetchSnippets: (pageNum?: number, limit?: number) => void;
    fetchSnippetbyId: (sid: string) => void;
    addSnippet: (snippet: ISnippet) => void;
    filterSnippets: (text: string) => void;
    clearFilter: () => void;
}

export interface Action {
    payload?: any;
    type: string;
}