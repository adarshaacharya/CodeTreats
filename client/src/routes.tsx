import HomePage from 'pages/HomePage';
import SnippetPage from 'pages/SnippetPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const useRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/snippets/:id' component={SnippetPage} />
            </Switch>
        </>
    );
};
