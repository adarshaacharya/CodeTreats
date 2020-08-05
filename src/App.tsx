import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import './styles/global.css';

function App() {
    const width = window.innerHeight;
    return (
        <>
            <SplitPane split='vertical' defaultSize={width}>
                <Pane />
                <SplitPane split='horizontal' defaultSize={'50%'}>
                    <Pane />
                    <Pane />
                </SplitPane>
            </SplitPane>
        </>
    );
}

export default App;
