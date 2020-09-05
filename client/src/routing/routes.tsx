import HomePage from 'pages/HomePage';
import SnippetPage from 'pages/SnippetPage';
import SnippetsPage from 'pages/SnippetsPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JoinRoomPage from 'pages/JoinRoomPage';
import RoomPage from 'pages/RoomPage';
import RoomRoute from './RoomRoute';

export const useRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/snippets' component={SnippetsPage} />
                <Route exact path='/snippets/:id' component={SnippetPage} />
                <Route exact path='/room' component={JoinRoomPage} />
                <Route exact path='/room/:roomId' component={RoomPage} />
            </Switch>
        </>
    );
};
