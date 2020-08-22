import { Col, Row } from 'antd';
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

export default HomePage;
