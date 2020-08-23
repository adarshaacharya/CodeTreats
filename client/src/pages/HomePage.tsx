import { Col, Row, Space } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import RunCode from 'components/RunCode';


const HomePage: React.FC = () => {
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <CodeEditor />
                </Col>

                <Col span={10} className='p-1'>
                    <LanguageSelector />
                    <InputPanel />
                    <OutputPanel />

                    <Space size='large' className='my-1'>
                        <RunCode />
                        <SaveSnippet />
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
