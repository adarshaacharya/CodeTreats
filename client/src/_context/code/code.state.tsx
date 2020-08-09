import Axios from 'axios';
import React from 'react';
import { CODE_DID_UPDATE, SUBMIT_CODE, SET_LOADING } from '../types';
import CodeContext from './code.context';
import codeReducer from './code.reducer';
import { State } from './code.type';

const CodeState: React.FC = ({ children }) => {
    const initialValues: State = {
        code: '',
        loading: false,
        output: {
            stdout: '',
            stderr: '',
        },
        updateCode: () => null,
        submitCode: () => null,
    };

    const [state, dispatch] = React.useReducer(codeReducer, initialValues);

    // updateCode
    const updateCode = (ev: Object, code: string) => {
        console.clear();
        dispatch({
            type: CODE_DID_UPDATE,
            payload: code,
        });
    };

    // action functions
    const submitCode = async (code: string) => {
        setLoading();
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

    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
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
