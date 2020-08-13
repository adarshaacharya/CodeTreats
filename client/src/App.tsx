import Navbar from 'components/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'routes';
import CodeState from '_context/code/code.state';
import './styles/global.css';

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <BrowserRouter>
                    <>
                        <Navbar />
                        {routes}
                    </>
                </BrowserRouter>
            </CodeState>
        </>
    );
};

export default App;
