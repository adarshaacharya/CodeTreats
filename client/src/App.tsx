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

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <ThemeState>
                    <Router history={history}>
                        <>
                            <ToastContainer newestOnTop />
                            <Navbar />
                            {routes}
                        </>
                    </Router>
                </ThemeState>
            </CodeState>
        </>
    );
};

export default App;
