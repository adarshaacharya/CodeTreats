import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';

const CodeEditor: React.FC = () => {
    const [theme, setTheme] = React.useState('dark');
    const options = {
        fontFamily: 'Operator Mono',
    };
    const handleEditorChange = () => {
        console.log('change editor');
    };
    return (
        <ControlledEditor
            height='100vh'
            language='javascript'
            theme={theme}
            onChange={handleEditorChange}
            options={options}
        />
    );
};

export default CodeEditor;
