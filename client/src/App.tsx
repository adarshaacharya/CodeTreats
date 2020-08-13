import Navbar from 'components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodeState from '_context/code/code.state';
import './styles/global.css';
import { useRoutes } from 'routes';

const App: React.FC = () => {
    const routes = useRoutes();
    return (
        <>
            <CodeState>
                <Router>
                    <>
                        <Navbar />
                        {routes}
                    </>
                </Router>
            </CodeState>
        </>
    );
};

export default App;
