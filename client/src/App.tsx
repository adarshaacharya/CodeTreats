import CodeEditor from 'components/CodeEditor';
import Navbar from 'components/Navbar';
import OutputPanel from 'components/OutputPanel';
import React from 'react';
import SplitPane from 'react-split-pane';
import CodeState from '_context/code/code.state';
import './styles/global.css';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    return (
        <>
            <CodeState>
                <Navbar />

                <SplitPane split='vertical' defaultSize={width} maxSize={width}>
                    <CodeEditor />
                    <OutputPanel />
                </SplitPane>
            </CodeState>
        </>
    );
};

export default App;
