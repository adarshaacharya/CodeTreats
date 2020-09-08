import { Col, Row } from 'antd';
import Chatbox from 'components/Room/Chatbox';
import RoomCodeExec from 'components/Room/RoomCodeExec';
import RoomEditor from 'components/Room/RoomEditor';
import RoomInfo from 'components/Room/RoomInfo';
import RoomInput from 'components/Room/RoomInput';
import RoomLang from 'components/Room/RoomLang';
import RoomOutput from 'components/Room/RoomOutput';
import ThemeSelector from 'components/ThemeSelector';
import React from 'react';

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
