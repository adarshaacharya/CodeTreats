import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions, theme } from 'utils/editor-options';
import CodeContext from '_context/code/code.context';

type Props = {
    snippetCode?: string;
};

const CodeEditor: React.FC<Props> = ({ snippetCode }) => {
    const codeContext = React.useContext(CodeContext);
    const { code, updateCode, language } = codeContext;

    const handleEditorChange = (ev?: object, value?: string) => {
        updateCode(value!);
    };

    return (
        <>
            <ControlledEditor
                height='100vh'
                language={language}
                theme={theme}
                options={editorOptions}
                value={snippetCode || code}
                onChange={handleEditorChange}
            />
            {code}
        </>
    );
};

export default CodeEditor;
