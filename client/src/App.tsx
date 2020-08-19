import Navbar from 'components/Navbar';
import React from 'react';
import { Router } from 'react-router-dom';
import { useRoutes } from 'routes';
import CodeState from '_context/code/code.state';
import 'assets/styles/global.css';
import history from 'utils/history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <Router history={history}>
                    <>
                        <ToastContainer newestOnTop />
                        <Navbar />
                        {routes}
                    </>
                </Router>
            </CodeState>
        </>
    );
};

export default App;
