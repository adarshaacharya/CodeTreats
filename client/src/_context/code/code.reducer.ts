import { SUBMIT_CODE, CODE_DID_UPDATE, SET_LOADING } from '_context/types';

import { Action, State } from './code.type';

export const initialState: State = {
    code: 'console.log("hello world")',
    loading: false,
    output: {
        stdout: '',
        stderr: '',
    },
    updateCode: () => null,
    submitCode: () => null,
};

export default function codeReducer(
    state: State = initialState,
    action: Action
) {
    const { type, payload } = action;
    switch (type) {
        case CODE_DID_UPDATE:
            return {
                ...state,
                code: payload,
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
