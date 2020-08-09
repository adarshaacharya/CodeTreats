import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';
import CodeContext from '_context/code/code.context';

const CodeEditor: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, updateCode } = codeContext;
    const theme = 'dark';
    return (
        <>
            <ControlledEditor
                height='100vh'
                language='javascript'
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={(ev, code) => updateCode(ev, code!)}
            />
            {code}
        </>
    );
};

export default CodeEditor;
