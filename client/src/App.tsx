import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodeState from '_context/code/code.state';
import './styles/global.css';


const App: React.FC = () => {
    return (
        <>
            <CodeState>
                <Router>
                    <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                    </>
                </Router>
            </CodeState>
        </>
    );
};

export default App;
