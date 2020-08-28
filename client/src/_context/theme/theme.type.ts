export interface State {
    theme: string;
    updateTheme: (theme: string) => void;
}

export interface Action {
    payload?: any;
    type: string;
}
