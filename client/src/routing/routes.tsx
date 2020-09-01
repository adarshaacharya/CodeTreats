import HomePage from 'pages/HomePage';
import SnippetPage from 'pages/SnippetPage';
import SnippetsPage from 'pages/SnippetsPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollabEditorPage from 'pages/CollabEditorPage';

export const useRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/snippets' component={SnippetsPage} />
                <Route exact path='/snippets/:id' component={SnippetPage} />
                <Route exact path='/room' component={CollabEditorPage} />
                <Route exact path='/room/:roomId' component={CollabEditorPage} />
            </Switch>
        </>
    );
};
