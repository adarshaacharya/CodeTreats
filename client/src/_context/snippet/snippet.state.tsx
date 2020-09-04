import * as React from 'react';
import api from 'utils/api';
import history from 'utils/history';
import { ADD_SNIPPET, CLEAR_FILTER, FETCH_SNIPPET, FETCH_SNIPPETS, FILTER_SNIPPETS, SET_LOADING } from '../types';
import SnippetContext from './snippet.context';
import snippetReducer, { initialState as initialValues } from './snippet.reducer';
import { ISnippet, State } from './snippet.type';

const SnippetState: React.FC = ({ children }) => {
    const initialState: State = {
        ...initialValues,
    };

    const [state, dispatch] = React.useReducer(snippetReducer, initialState);

    // fetch list of snippets
    const fetchSnippets = async (pageNum?: number, limit?: number) => {
        try {
            setLoading();
            const res = await api.get(`/snippets`);
            dispatch({
                type: FETCH_SNIPPETS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // save snippet
    const addSnippet = async (snippet: ISnippet) => {
        try {
            const res = await api.post(`/snippets`, snippet);
            dispatch({
                type: ADD_SNIPPET,
                payload: res.data,
            });

            // programmatic navigation from custom history obj
            history.push('/snippets');
        } catch (error) {
            console.log(error);
        }
    };

    // filter snippets
    const filterSnippets = (text: string) => {
        dispatch({
            type: FILTER_SNIPPETS,
            payload: text,
        });
    };

    // clear filters
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER,
        });
    };

    // set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        });
    };

    return (
        <SnippetContext.Provider
            value={{
                snippets: state.snippets,
                filtered: state.filtered,
                loading: state.loading,
                fetchSnippets,
                addSnippet,
                filterSnippets,
                clearFilter,
            }}
        >
            {children}
        </SnippetContext.Provider>
    );
};

export default SnippetState;
