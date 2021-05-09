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
    loading: boolean;

    fetchSnippets: (pageNum?: number, limit?: number) => void;
    addSnippet: (snippet: ISnippet) => void;
    filterSnippets: (text: string) => void;
    clearFilter: () => void;
}

export interface Action {
    payload?: any;
    type: string;
}
