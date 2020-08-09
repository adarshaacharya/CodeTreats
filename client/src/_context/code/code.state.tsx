import React from 'react';
import Axios from 'axios';

import CodeContext from './code.context';
import codeReducer from './code.reducer';
import { SUBMIT_CODE, CODE_DID_UPDATE } from '../types';
import { CodeState } from './code.type';

const CodeState: React.FC = ({ children }) => {
    const initialValues: CodeState = {
        code: '',
        loading: true,
        output: null,
        updateCode: (code: string) => void,
        submitCode: (code: string) => void,
    };

    const [state, dispatch] = React.useReducer(codeReducer, initialValues);

    // updateCode
    const updateCode = (code: string) => {
        console.clear();
        dispatch({
            type: CODE_DID_UPDATE,
            payload: code,
        });
    };

    // action functions
    const submitCode = async (code: string) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const payload = {
            language: 'javascript',
            sourceCode: code,
        };
        const res = await Axios.post('/api/code/submit', payload, config);
        dispatch({
            type: SUBMIT_CODE,
            payload: res.data,
        });
    };

    return (
        <CodeContext.Provider
            value={{
                code: state?.code,
                loading: state?.loading,
                output: state.output,
                updateCode,
                submitCode,
            }}
        >
            {children}
        </CodeContext.Provider>
    );
};

export default CodeState;
