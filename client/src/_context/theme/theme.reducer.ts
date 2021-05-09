import { UPDATE_THEME } from '_context/types';
import { Action, State } from './theme.type';

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
