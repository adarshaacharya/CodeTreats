import CodeEditor from 'components/CodeEditor';
import ErrorField from 'components/ErrorField';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';
import Axios from 'axios';
import { initialVal } from 'utils/template';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    const [code, setCode] = React.useState(initialVal);
    type CodeFunc = (ev: any, value: string | undefined) => void;

    const handleChange: CodeFunc = (ev: KeyboardEvent, value) => {
        setCode(value!);
    };

    const handleSubmit = async (code: string) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const payload = {
            language: 'javascript',
            sourceCode: code,
        };
        const result = await Axios.post('/api/code/submit', payload, config);
        console.log(result.data);
    };

    return (
        <>
            <SplitPane split='vertical' defaultSize={width} maxSize={width}>
                <CodeEditor
                    handleSubmit={handleSubmit}
                    code={code}
                    handleChange={handleChange}
                />
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
