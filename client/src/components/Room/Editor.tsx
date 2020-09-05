import { Col, Row } from 'antd';
import ThemeSelector from 'components/ThemeSelector';
import React from 'react';
import CodeExec from './CodeExec';
import Info from './Info';
import Output from './Output';
import RoomEditor from './RoomEditor';
import RoomInput from './RoomInput';
import RoomLang from './RoomLang';

const Editor = () => {
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <RoomEditor />
                </Col>
                <Col span={10} className='p-1'>
                    <Info />
                    <RoomLang />
                    <ThemeSelector />
                    <RoomInput />
                    <Output />
                    <CodeExec />
                </Col>
            </Row>
        </>
    );
};

export default Editor;
