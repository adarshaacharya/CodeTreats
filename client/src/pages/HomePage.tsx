import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import { Row, Col } from 'antd';

const HomePage: React.FC = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <CodeEditor />
                </Col>

                <Col span={12}>
                    <InputPanel />
                    <OutputPanel />
                    <SaveSnippet />
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
