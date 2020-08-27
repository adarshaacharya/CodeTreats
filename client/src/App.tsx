import 'assets/styles/global.css';
import { Navbar } from 'layout';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'routes';
import history from 'utils/history';
import CodeState from '_context/code/code.state';
import ThemeState from '_context/theme/theme.state';
import SnippetState from '_context/snippet/snippet.state';

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <SnippetState>
                    <ThemeState>
                        <Router history={history}>
                            <>
                                <ToastContainer newestOnTop />
                                <Navbar />
                                {routes}
                            </>
                        </Router>
                    </ThemeState>
                </SnippetState>
            </CodeState>
        </>
    );
};

export default App;
