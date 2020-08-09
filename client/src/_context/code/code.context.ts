import React from 'react';
import { CodeState } from './code.type';
const initialValues: CodeState = {
    code: '',
    loading: true,
    output: null,
    updateCode: () => null,
    submitCode: () => null,
};

const CodeContext = React.createContext(initialValues);

export default CodeContext;
