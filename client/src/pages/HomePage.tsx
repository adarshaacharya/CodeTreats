import { Col, Row, Space } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import RunCode from 'components/RunCode';
import CollectionsPage from 'components/SaveSnippet/CollectionPage';

const HomePage: React.FC = () => {
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

                    <Space size='large' className='my-1'>
                        <RunCode />
                        <SaveSnippet />
                        <CollectionsPage />
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
