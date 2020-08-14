import getTemplate from 'utils/language-examples';
import {
    CODE_DID_UPDATE,
    FETCH_SNIPPETS,
    INPUT_DID_UPDATE,
    SET_LOADING,
    SUBMIT_CODE,
    UPDATE_LANGUAGE,
} from '_context/types';
import { Action, State } from './code.type';
import { resolveAny } from 'dns';

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
    updateCode: () => null,
    updateInput: () => null,
    updateLanguage: () => null,
    submitCode: () => null,
    fetchSnippets: () => null,
    fetchSnippetbyId: () => null,
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

        default:
            return state;
    }
}
