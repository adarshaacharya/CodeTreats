import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';

type Props = {
    code: string;
    handleChange: (ev: Object, value: string) => void;
};

const CodeEditor: React.FC<Props> = ({ code, handleChange }) => {
    const theme = 'dark';

    return (
        <>
            <ControlledEditor
                height='100vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={(ev, code) => handleChange(ev, code!)}
            />
            {code}
        </>
    );
};

export default CodeEditor;
