import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';

const CodeEditor: React.FC = () => {
    const theme = 'dark';
    const [code, setCode] = React.useState('');
    type CodeFunc = (ev: any, value: string | undefined) => void;

    const handleChange: CodeFunc = (ev, value) => {
        setCode(value!);
    };
    console.log(code);

    return (
        <>
            <ControlledEditor
                height='100vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={handleChange}
            />
        </>
    );
};

export default CodeEditor;
