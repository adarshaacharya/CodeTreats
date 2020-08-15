import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

const HomePage: React.FC = () => {
    const width1 = window.innerHeight / 0.8;
    const width2 = window.innerHeight / 2;
    return (
        <>
            <Row>
                <Col lg={6}>
                    <CodeEditor />
                </Col>

                <Col lg={6}>
                    <InputPanel />
                    <OutputPanel />
                    <SaveSnippet />
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
