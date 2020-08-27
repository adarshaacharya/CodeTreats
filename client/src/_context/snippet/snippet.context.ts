import React from 'react';
import { State } from './snippet.type';
import { initialState } from './snippet.reducer';

const DEFAULT_VALUE: State = {
    ...initialState,
};
const SnippetContext = React.createContext(DEFAULT_VALUE);

export default SnippetContext;
