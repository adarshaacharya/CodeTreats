import Axios from 'axios';
import CodeEditor from 'components/CodeEditor';
import Navbar from 'components/Navbar';
import OutputField from 'components/OutputField';
import React from 'react';
import SplitPane from 'react-split-pane';
import './styles/global.css';

const App: React.FC = () => {
    const width = window.innerHeight / 0.8;

    const [code, setCode] = React.useState('');
    const [output, setOutput] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (ev: Object, code: string) => {
        setCode(code);
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
            <Navbar handleSubmit={handleSubmit} code={code} loading={loading} />
            <SplitPane
                split='vertical'
                defaultSize={width}
                minSize={width}
                maxSize={width}
            >
                <CodeEditor code={code} handleChange={handleChange} />
                <OutputField output={output} loading={loading} />
            </SplitPane>
        </>
    );
};

export default App;
