import getTemplate from 'config/editor/examples';
import {
    CODE_DID_UPDATE,
    INPUT_DID_UPDATE,
    SET_LOADING,
    SUBMIT_CODE,
    UPDATE_LANGUAGE,
    FETCH_SNIPPET,
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
    updateCode: () => null,
    updateInput: () => null,
    updateLanguage: () => null,
    submitCode: () => null,
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

        case FETCH_SNIPPET:
            return {
                ...state,
                language: payload.language,
                code: payload.sourceCode,
                loading: false,
            };

        default:
            return state;
    }
}
