import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions, theme } from 'utils/editor-options';
import CodeContext from '_context/code/code.context';

const CodeEditor: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, updateCode, language } = codeContext;

    const handleEditorChange = (ev?: object, value?: string) => {
        updateCode(value!);
    };

    return (
        <>
            <ControlledEditor
                height='90vh'
                language={language}
                theme={theme}
                options={editorOptions}
                value={code}
                onChange={handleEditorChange}
            />
        </>
    );
};

export default CodeEditor;
