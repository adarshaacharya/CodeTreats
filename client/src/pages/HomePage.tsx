import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import React from 'react';
import SplitPane from 'react-split-pane';

const HomePage: React.FC = () => {
    const width1 = window.innerHeight / 0.8;
    const width2 = window.innerHeight / 2;
    return (
        <React.Fragment>
            <SplitPane split='vertical' defaultSize={width1} maxSize={width1}>
                <CodeEditor />

                <SplitPane split='horizontal' defaultSize={width2} maxSize={width2}>
                    <InputPanel />
                    <OutputPanel />
                </SplitPane>
            </SplitPane>
        </React.Fragment>
    );
};

export default HomePage;
