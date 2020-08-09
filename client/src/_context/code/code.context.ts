import React from 'react';
import { State } from './code.type';
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

const CodeContext = React.createContext(initialValues);

export default CodeContext;
