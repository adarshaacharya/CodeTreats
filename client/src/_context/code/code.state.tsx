import React from 'react';
import api from 'utils/api';
import { CODE_DID_UPDATE, INPUT_DID_UPDATE, SET_LOADING, SUBMIT_CODE, UPDATE_LANGUAGE } from '../types';
import CodeContext from './code.context';
import codeReducer, { initialState as initialValues } from './code.reducer';
import { State } from './code.type';

const CodeState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(codeReducer, initialState);

    // updateCode
    const updateCode = (code: string) => {
        // console.clear();
        dispatch({
            type: CODE_DID_UPDATE,
            payload: code,
        });
    };

    // upate Input
    const updateInput = (input: string) => {
        dispatch({
            type: INPUT_DID_UPDATE,
            payload: input,
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
    const submitCode = async (code: string, language: string, input: string) => {
        try {
            setLoading();
            const payload = {
                language: language,
                sourceCode: code,
                userInput: input,
            };
            const res = await api.post('/code/submit', payload);
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
                input: state.input,
                updateCode,
                updateInput,
                updateLanguage,
                submitCode,
            }}
        >
            {children}
        </CodeContext.Provider>
    );
};

export default CodeState;
