import { ControlledEditor } from '@monaco-editor/react';
import React from 'react';

const CodeEditor: React.FC = () => {
    const theme = "dark"
    const options = {
        fontFamily: 'Dank Mono',
        fontLigatures : true,
        fontSize : '20px',
        wordWrap : true,
        minimap : {
            enabled : false
        }
    };
    const handleEditorChange = () => {
        console.log('change editor');
    };
    return (
        <ControlledEditor
            height='100vh'
            language='javascript'
            theme={theme}
            onChange={handleEditorChange}
            options={options}
        />
    );
};

export default CodeEditor;
