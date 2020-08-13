import getTemplate from 'utils/language-templates';
import {
    CODE_DID_UPDATE,
    GET_SNIPPET,
    INPUT_DID_UPDATE,
    SET_LOADING,
    SUBMIT_CODE,
    UPDATE_LANGUAGE,
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

        default:
            return state;
    }
}
