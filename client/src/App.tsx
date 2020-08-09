import Axios from 'axios';
import CodeEditor from 'components/CodeEditor';
import Navbar from 'components/Navbar';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';
import { initialVal } from 'utils/template';
import CodeState from '_context/code/code.state';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    const [code, setCode] = React.useState(initialVal);
    const [output, setOutput] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (ev: Object, code: string) => {
        setCode((prevC) => ({ ...prevC, text: code }));
    };
    const handleSubmit = async (code: string) => {
        setLoading(true);
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
        setLoading(false);
    };

    return (
        <>
            <CodeState>
                <Navbar
                    handleSubmit={handleSubmit}
                    code={code.text}
                    loading={loading}
                />

                <SplitPane
                    split='vertical'
                    defaultSize={width}
                    minSize={width}
                    maxSize={width}
                >
                    <CodeEditor code={code.text} handleChange={handleChange} />
                    <OutputField output={output} />
                </SplitPane>
            </CodeState>
        </>
    );
};

export default App;
