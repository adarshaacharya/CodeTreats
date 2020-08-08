import Axios from 'axios';
import CodeEditor from 'components/CodeEditor';
import ErrorField from 'components/ErrorField';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';
import Navbar from 'components/Navbar';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    const [code, setCode] = React.useState('');
    const [output, setOutput] = React.useState(null);

    const handleChange = (ev: Object, code: string) => {
        setCode(code);
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
        setOutput(result.data);
    };

    return (
        <>
        <Navbar/>
            <SplitPane split='vertical' defaultSize={width} maxSize={width}>
                <CodeEditor
                    code={code}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <SplitPane
                    split='horizontal'
                    defaultSize={'50vh'}
                    maxSize={'50vh'}
                >
                    <OutputField output={output} />
                    <ErrorField />
                </SplitPane>
            </SplitPane>
        </>
    );
};

export default App;
