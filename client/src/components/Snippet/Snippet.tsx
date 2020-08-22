import { Col, Row } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import RunCode from 'components/RunCode';
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
                <Col span={14}>
                    <CodeEditor />
                </Col>

                <Col span={10} className='p-1'>
                    <LanguageSelector />
                    <InputPanel />
                    <OutputPanel />

                    <Row gutter={16}>
                        <Col>
                            <RunCode />
                        </Col>
                        <Col>
                            <SaveSnippet />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Snippet;
