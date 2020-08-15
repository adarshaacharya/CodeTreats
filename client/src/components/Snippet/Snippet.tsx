import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import React from 'react';
import { useParams } from 'react-router-dom';
import CodeContext from '_context/code/code.context';

const Snippet = () => {
    const { id } = useParams();
    const codeContext = React.useContext(CodeContext);
    const { fetchSnippetbyId, code, updateCode, updateLanguage, language } = codeContext;

    React.useEffect(() => {
        fetchSnippetbyId(id);
        // code cleanup(important to switch diff editor)
        return () => {
            console.log('🦄 Unmounting Component..');
            updateCode(code!);
            updateLanguage(language);
        };
        // eslint-disable-next-line
    }, [id]);

    return (
        <>
            <CodeEditor />
            <InputPanel />
            <OutputPanel />
        </>
    );
};

export default Snippet;
