import JoinRoomPage from 'pages/CollabPage/CollabPage';
import HomePage from 'pages/HomePage/HomePage';
import RoomPage from 'pages/RoomPage/RoomPage';
import SnippetPage from 'pages/SnippetPage/SnippetPage';
import SnippetsPage from 'pages/SnippetsPage/SnippetsPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoomRoute from './RoomRoute';

export const useRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/snippets' component={SnippetsPage} />
                <Route exact path='/snippets/:snippetId' component={SnippetPage} />
                <Route exact path='/room' component={JoinRoomPage} />
                <RoomRoute exact path='/room/:roomId' component={RoomPage} />
            </Switch>
        </>
    );
};
