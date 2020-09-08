import { Col, Row } from 'antd';
import ThemeSelector from 'components/ThemeSelector';
import React from 'react';
import RoomCodeExec from 'components/Room/RoomCodeExec';
import RoomInfo from 'components/Room/RoomInfo';
import RoomOutput from 'components/Room/RoomOutput';
import Chatbox from 'components/Room/Chatbox';
import RoomEditor from 'components/Room/RoomEditor';
import RoomInput from 'components/Room/RoomInput';
import RoomLang from 'components/Room/RoomLang';

const RoomPage = () => {
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <RoomEditor />
                </Col>
                <Col span={10} className='p-1'>
                    <RoomInfo />
                    <Chatbox />
                    <Row>
                        <Col span={8}>
                            <RoomLang />
                        </Col>
                        <Col span={8} offset={4}>
                            <ThemeSelector />
                        </Col>
                    </Row>
                    <RoomInput />
                    <RoomOutput />
                    <RoomCodeExec />
                </Col>
            </Row>
        </>
    );
};

export default RoomPage;
