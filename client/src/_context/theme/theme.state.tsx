import React from 'react';
import themeReducer, { initialState as initialValues } from './theme.reducer';
import { State } from './theme.type';
import { UPDATE_THEME } from '_context/types';
import ThemeContext from './theme.context';

const ThemeState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(themeReducer, initialState);

    // updateTheme
    const updateTheme = (theme: string) => {
        dispatch({
            type: UPDATE_THEME,
            payload: theme,
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: state.theme,
                updateTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;
