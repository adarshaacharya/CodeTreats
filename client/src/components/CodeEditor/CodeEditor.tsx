import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';

type Props = {
    handleSubmit: (code: string) => void;
    code: string;
    handleChange: (ev: KeyboardEvent, value: string) => void;
};

const CodeEditor: React.FC<Props> = ({ handleSubmit, code, handleChange }) => {
    const theme = 'dark';

    return (
        <>
            <ControlledEditor
                height='80vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={(e) => handleChange(e, code)}
            />
            <button onClick={() => handleSubmit(code)}>Click</button>
        </>
    );
};

export default CodeEditor;
