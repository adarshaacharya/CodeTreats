import Axios from 'axios';
import CodeEditor from 'components/CodeEditor';
import Navbar from 'components/Navbar';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';
import CodeState from '_context/code/code.state';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    return (
        <>
            <CodeState>
                <Navbar />

                <SplitPane
                    split='vertical'
                    defaultSize={width}
                    maxSize={width}
                >
                    <CodeEditor />
                    <OutputField />
                </SplitPane>
            </CodeState>
        </>
    );
};

export default App;
