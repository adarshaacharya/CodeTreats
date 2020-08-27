import { Col, Row, Space, Divider } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import RunCode from 'components/RunCode';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import { useParams } from 'react-router-dom';
import CodeContext from '_context/code/code.context';
import ThemeSelector from 'components/ThemeSelector';
import SnippetContext from '_context/snippet/snippet.context';

const Snippet = () => {
    const { id } = useParams();
    const { fetchSnippetbyId } = React.useContext(SnippetContext);
    const { code, updateCode, updateLanguage, language } = React.useContext(CodeContext);

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
