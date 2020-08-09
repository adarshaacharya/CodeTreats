import React from 'react';
import { State } from './code.type';
const initialValues: State = {
    code: null,
    loading: true,
    output: null,
    updateCode: () => null,
    submitCode: () => null,
};

const CodeContext = React.createContext(initialValues);

export default CodeContext;
