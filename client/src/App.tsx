import 'antd/dist/antd.dark.css';
import 'assets/styles/global.css';
import Navbar from 'components/Navbar';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'routes';
import history from 'utils/history';
import CodeState from '_context/code/code.state';


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
