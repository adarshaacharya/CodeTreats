import { ADD_SNIPPET, CLEAR_FILTER, FETCH_SNIPPET, FETCH_SNIPPETS, FILTER_SNIPPETS } from '_context/types';
import { Action, State } from './snippet.type';

export const initialState: State = {
    snippets: [],
    filtered: [],
    fetchSnippets: () => null,
    fetchSnippetbyId: () => null,
    addSnippet: () => null,
    filterSnippets: () => null,
    clearFilter: () => null,
};

// reducer
export default function snippetReducer(state: State = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_SNIPPETS:
            return {
                ...state,
                snippets: payload,
                loading: false,
            };

        case FETCH_SNIPPET:
            return {
                ...state,
                language: payload.language,
                code: payload.sourceCode,
                loading: false,
            };

        case ADD_SNIPPET:
            return {
                ...state,
                snippets: [payload, ...state.snippets],
            };

        case FILTER_SNIPPETS:
            return {
                ...state,
                filtered: state.snippets.filter((snippet) => {
                    const regx = new RegExp(`${action.payload}`, 'gi');
                    return snippet.title.match(regx);
                }),
            };

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: [],
            };

        default:
            return state;
    }
}
