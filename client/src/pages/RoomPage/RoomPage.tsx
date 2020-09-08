import { Col, Row } from 'antd';
import ThemeSelector from 'components/ThemeSelector';
import React from 'react';
import CodeExec from 'components/Room/CodeExec';
import Info from 'components/Room/Info';
import Output from 'components/Room/Output';
import RoomDrawer from 'components/Room/RoomDrawer';
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
                    <Info />
                    <RoomDrawer />
                    <Row>
                        <Col span={8}>
                            <RoomLang />
                        </Col>
                        <Col span={8} offset={4}>
                            <ThemeSelector />
                        </Col>
                    </Row>
                    <RoomInput />
                    <Output />
                    <CodeExec />
                </Col>
            </Row>
        </>
    );
};

export default RoomPage;
