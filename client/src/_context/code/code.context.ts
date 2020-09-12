import React from 'react';
import { State } from './code.type';
import { initialState } from './code.reducer';

const DEFAULT_VALUE: State = {
    ...initialState,
};

const CodeContext = React.createContext(DEFAULT_VALUE);

export default CodeContext;

export const useCodeContext = () => {
    return React.useContext(CodeContext);
};
