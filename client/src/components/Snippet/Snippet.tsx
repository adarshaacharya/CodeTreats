import { Col, Divider, Row, Space } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import RunCode from 'components/RunCode';
import SaveSnippet from 'components/SaveSnippet';
import ThemeSelector from 'components/ThemeSelector';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCodeContext } from '_context/code/code.context';

const Snippet = () => {
    const { snippetId } = useParams();

    const { code, updateCode, updateLanguage, language, fetchSnippetbyId } = useCodeContext();

    React.useEffect(() => {
        fetchSnippetbyId(snippetId);

        // code cleanup(important to switch diff editor)
        return () => {
            console.log('🦄 Unmounting Component..');
            updateCode(code!);
            updateLanguage(language);
        };
        // eslint-disable-next-line
    }, [snippetId]);

    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <CodeEditor />
                </Col>

                <Col span={10} className='p-1'>
                    <LanguageSelector />
                    <ThemeSelector />
                    <InputPanel />
                    <OutputPanel />
                    <Space size='large' className='mt-1'>
                        <RunCode />
                        <SaveSnippet />
                    </Space>
                </Col>
            </Row>
            <Divider />
        </>
    );
};

export default Snippet;
