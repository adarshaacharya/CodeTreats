import { Col, Row } from 'antd';
import React from 'react';
import CodeExec from './CodeExec';
import Info from './Info';
import Output from './Output';
import RoomEditor from './RoomEditor';
import RoomLang from './RoomLang';
import RoomTheme from './RoomTheme';

const Editor = () => {
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <RoomEditor />
                </Col>
                <Col span={10}>
                    <Info />
                    <RoomLang />
                    <RoomTheme />
                    <Output />
                    <CodeExec />
                </Col>
            </Row>
        </>
    );
};

export default Editor;
