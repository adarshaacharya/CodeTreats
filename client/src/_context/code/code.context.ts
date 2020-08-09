import React from 'react';
import { CodeState } from './code.type';

const initialValues = {
    code: '',
    loading: true,
    output: null,
};

const CodeContext = React.createContext(initialValues);

export default CodeContext;
