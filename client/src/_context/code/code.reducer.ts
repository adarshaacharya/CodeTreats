import getTemplate from 'config/editor/examples';
import {
    CODE_DID_UPDATE,
    FETCH_SNIPPET,
    FETCH_SNIPPETS,
    INPUT_DID_UPDATE,
    SET_LOADING,
    SUBMIT_CODE,
    UPDATE_LANGUAGE,
    ADD_SNIPPET,
    FILTER_SNIPPETS,
    CLEAR_FILTER,
} from '_context/types';
import { Action, State } from './code.type';

//initial  value on first render
export const initialState: State = {
    code: getTemplate('javascript'),
    language: 'javascript',
    input: '',
    loading: false,
    output: {
        stdout: '',
        stderr: '',
    },
    snippets: [],
    filtered: [],
    updateCode: () => null,
    updateInput: () => null,
    updateLanguage: () => null,
    submitCode: () => null,
    fetchSnippets: () => null,
    fetchSnippetbyId: () => null,
    addSnippet: () => null,
    filterSnippets: () => null,
    clearFilter: () => null,
};

//reducer
export default function codeReducer(state: State = initialState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case CODE_DID_UPDATE:
            return {
                ...state,
                code: payload,
            };

        case INPUT_DID_UPDATE:
            return {
                ...state,
                input: payload,
            };

        case UPDATE_LANGUAGE:
            return {
                ...state,
                language: payload,
                code: getTemplate(payload),
            };

        case SUBMIT_CODE:
            return {
                ...state,
                output: payload,
                loading: false,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

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
