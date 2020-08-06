import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';
import { initialVal } from 'utils/template';

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
