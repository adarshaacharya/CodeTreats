import CodeEditor from 'components/CodeEditor';
import InputPanel from 'components/InputPanel';
import OutputPanel from 'components/OutputPanel';
import SaveSnippet from 'components/SaveSnippet';
import React from 'react';
import { Col, Row } from 'react-grid-system';

const HomePage: React.FC = () => {
    return (
        <>
            <Row debug>
                <Col md={6}>
                    <CodeEditor />
                </Col>

                <Col md={6}>
                    <InputPanel />
                    <OutputPanel />
                    <SaveSnippet />
                </Col>
            </Row>
        </>
    );
};

export default HomePage;
