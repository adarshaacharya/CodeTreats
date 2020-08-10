import Axios from 'axios';
import React from 'react';
import {
    CODE_DID_UPDATE,
    SUBMIT_CODE,
    SET_LOADING,
    UPDATE_LANGUAGE,
} from '../types';
import CodeContext from './code.context';
import codeReducer from './code.reducer';
import { State } from './code.type';
import { initialState as initialValues } from './code.reducer'; // to avoid name conflict

const CodeState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(codeReducer, initialState);

    // updateCode
    const updateCode = (ev: Object, code: string) => {
        console.clear();
        dispatch({
            type: CODE_DID_UPDATE,
            payload: code,
        });
    };

    // update language
    const updateLanguage = (lang: string) => {
        dispatch({
            type: UPDATE_LANGUAGE,
            payload: lang,
        });
    };

    // action functions
    const submitCode = async (code: string, language: string) => {
        try {
            setLoading();
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const payload = {
                language: language,
                sourceCode: code,
            };
            const res = await Axios.post('/api/code/submit', payload, config);
            dispatch({
                type: SUBMIT_CODE,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        });
    };

    return (
        <CodeContext.Provider
            value={{
                code: state?.code,
                language: state.language,
                loading: state?.loading,
                output: state.output,
                updateCode,
                updateLanguage,
                submitCode,
            }}
        >
            {children}
        </CodeContext.Provider>
    );
};

export default CodeState;
