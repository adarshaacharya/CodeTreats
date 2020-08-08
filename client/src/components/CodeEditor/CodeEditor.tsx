import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';

type Props = {
    code: string;
    handleChange: (ev: Object, value: string) => void;
    handleSubmit: (code: string) => void;
};

const CodeEditor: React.FC<Props> = ({ code, handleChange, handleSubmit }) => {
    const theme = 'dark';

    return (
        <>
            <ControlledEditor
                height='80vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={(ev, code) => handleChange(ev, code!)}
            />
            <button onClick={() => handleSubmit(code)}>Click</button>
            {code}
        </>
    );
};

export default CodeEditor;
