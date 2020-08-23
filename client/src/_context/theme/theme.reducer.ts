import * as React from 'react';
import { State, Action } from './theme.type';
import { UPDATE_THEME } from '_context/types';

export const initialState: State = {
    theme: 'dark',
    updateTheme: () => null,
};

export default function themeReducer(state: State, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_THEME:
            return {
                ...state,
                theme: payload,
            };

        default:
            return state;
    }
}
