import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';
import { editorOptions } from 'utils/editor-options';
import CodeContext from '_context/code/code.context';
import ThemeContext from '_context/theme/theme.context';

const CodeEditor: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { code, updateCode, language } = codeContext;

    const themeContext = React.useContext(ThemeContext);
    const { theme } = themeContext;

    const handleEditorChange = (ev?: object, value?: string) => {
        updateCode(value!);
    };

    return (
        <>
            <ControlledEditor
                height='100%'
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
