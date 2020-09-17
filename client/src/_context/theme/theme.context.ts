import React from 'react';
import { initialState } from './theme.reducer';
import { State } from './theme.type';

const DEFAULT_VALUE: State = {
    ...initialState,
};

const ThemeContext = React.createContext(DEFAULT_VALUE);

export default ThemeContext;

export const useThemeContext = () => {
    return React.useContext(ThemeContext);
};
