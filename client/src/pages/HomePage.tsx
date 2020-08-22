import { Col, Row } from 'antd';
import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import LanguageSelector from 'components/Navbar/LanguageSelector';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <CodeEditor />
                </Col>

                <Col span={12}>
                    <LanguageSelector />
                    <InputPanel />
                    <OutputPanel />
                    <SaveSnippet />
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
