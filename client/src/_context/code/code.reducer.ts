import { SUBMIT_CODE, CODE_DID_UPDATE } from '../types';

import { Action, CodeState } from './code.type';

const initialState: CodeState = {
    code: '',
    loading: true,
    output: null,
    updateCode: () => null,
    submitCode: () => null,
};

export default function codeReducer(
    state: CodeState = initialState,
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

        default:
            return state;
    }
}
