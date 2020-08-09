import Axios from 'axios';
import React from 'react';
import { CODE_DID_UPDATE, SUBMIT_CODE } from '../types';
import CodeContext from './code.context';
import codeReducer from './code.reducer';
import { State } from './code.type';

const CodeState: React.FC = ({ children }) => {
    const initialValues: State = {
        code: null,
        loading: true,
        output: {
            stdout: '',
            stderr: '',
        },
        updateCode: () => null,
        submitCode: () => null,
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
