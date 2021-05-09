import React from 'react';
import { initialState } from './snippet.reducer';
import { State } from './snippet.type';

const DEFAULT_VALUE: State = {
    ...initialState,
};
const SnippetContext = React.createContext(DEFAULT_VALUE);

export default SnippetContext;

export const useSnippetContext = () => {
    return React.useContext(SnippetContext);
};
