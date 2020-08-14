import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import React from 'react';
import { useParams } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import CodeContext from '_context/code/code.context';

const Snippet = () => {
    const { id } = useParams();
    const codeContext = React.useContext(CodeContext);
    const { fetchSnippetbyId, code, language, loading } = codeContext;

    const width1 = window.innerHeight / 0.8;
    const width2 = window.innerHeight / 2;
    React.useEffect(() => {
        console.log('side effect');
        fetchSnippetbyId(id);
    }, [id]);

    if (loading || !code || !language) return <p>Loading..</p>;

    return (
        <div>
            <SplitPane split='vertical' defaultSize={width1} maxSize={width1}>
                <CodeEditor />

                <SplitPane split='horizontal' defaultSize={width2} maxSize={width2}>
                    <InputPanel />
                    <OutputPanel />
                </SplitPane>
            </SplitPane>
        </div>
    );
};

export default Snippet;
