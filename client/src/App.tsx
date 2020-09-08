import 'assets/styles/global.css';
import { Navbar } from 'layout';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'routing/routes';
import history from 'utils/history';
import CodeState from '_context/code/code.state';
import ThemeState from '_context/theme/theme.state';
import SnippetState from '_context/snippet/snippet.state';
import RoomState from '_context/room/room.state';

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <SnippetState>
                    <ThemeState>
                        <RoomState>
                            <Router history={history}>
                                <>
                                    <ToastContainer newestOnTop />
                                    <Navbar />
                                    {routes}
                                </>
                            </Router>
                        </RoomState>
                    </ThemeState>
                </SnippetState>
            </CodeState>
        </>
    );
};

export default App;
