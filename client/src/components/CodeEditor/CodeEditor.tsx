import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions, theme } from 'utils/editor-options';
import CodeContext from '_context/code/code.context';

const CodeEditor: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, updateCode, language } = codeContext;
    return (
        <>
            <ControlledEditor
                height='100vh'
                language={language}
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
