import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import React from 'react';
import SplitPane from 'react-split-pane';
import { Prompt } from 'react-router';

type Props = {
    navigationBlocked: boolean;
};

const HomePage: React.FC<Props> = ({ navigationBlocked }) => {
    const width1 = window.innerHeight / 0.8;
    const width2 = window.innerHeight / 2;
    return (
        <React.Fragment>
            <Prompt when={navigationBlocked} message='You have unsaved changes, are you sure you want to leave?' />

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
