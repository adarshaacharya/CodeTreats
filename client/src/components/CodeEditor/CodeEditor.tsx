import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';
import { initialVal } from 'utils/template';
import Axios from 'axios';

const CodeEditor: React.FC = () => {
    const theme = 'dark';
    const [code, setCode] = React.useState(initialVal);
    type CodeFunc = (ev: any, value: string | undefined) => void;

    const handleChange: CodeFunc = (ev, value) => {
        setCode(value!);
    };
    console.log(code);

    const handleSubmit = async () => {
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
            <ControlledEditor
                height='80vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Click</button>
        </>
    );
};

export default CodeEditor;
