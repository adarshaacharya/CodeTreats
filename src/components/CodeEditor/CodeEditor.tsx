import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { initialVal } from 'templates';
import { editorOptions } from 'utils/editorOptions';

const CodeEditor: React.FC = () => {
    const [value, setValue] = React.useState(initialVal);
    const theme = 'dark';

    const handleEditorChange = () => {
        console.log('change editor');
    };
    return (
        <ControlledEditor
            height='100vh'
            language='javascript'
            theme={theme}
            onChange={handleEditorChange}
            options={editorOptions}
            value={value}
        />
    );
};

export default CodeEditor;
