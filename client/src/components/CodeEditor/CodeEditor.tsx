import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';
import { initialVal } from 'utils/template';

const CodeEditor: React.FC = () => {
    const [code, setCode] = React.useState(initialVal);

    const theme = 'dark';

    const handleCodeChange = () => {
        setCode(code);
    };

    return (
        <ControlledEditor
            height='100vh'
            language='javascript'
            theme={theme}
            onChange={handleCodeChange}
            options={editorOptions}
            value={code}
        />
    );
};

export default CodeEditor;
