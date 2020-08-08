import CodeEditor from 'components/CodeEditor';
import ErrorField from 'components/ErrorField';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    return (
        <>
            <SplitPane split='vertical' defaultSize={width} maxSize={width}>
                <CodeEditor />
                <SplitPane
                    split='horizontal'
                    defaultSize={'50vh'}
                    maxSize={'50vh'}
                >
                    <OutputField />
                    <ErrorField />
                </SplitPane>
            </SplitPane>
        </>
    );
};

export default App;
