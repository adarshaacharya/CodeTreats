import { defineTheme } from 'theme';

/* 
    API Reference : https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
*/
export const editorOptions: Object = {
    fontFamily: 'Dank Mono',
    fontLigatures: true,
    fontSize: '16px',
    wordWrap: true,
    minimap: {
        enabled: false,
    },
    dragAndDrop: true,
    mouseWheelZoom: true,
};

export const theme = 'dark';
