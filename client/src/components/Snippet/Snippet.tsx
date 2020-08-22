import { Col, Row } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
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
            <Row>
                <Col md={12}>
                    <CodeEditor />
                </Col>

                <Col md={12}>
                    <InputPanel />
                    <OutputPanel />
                    <SaveSnippet />
                </Col>
            </Row>
        </>
    );
};

export default Snippet;
