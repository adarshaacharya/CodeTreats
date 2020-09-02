import { Col, Row } from 'antd';
import React from 'react';
import RoomContext from '_context/room/room.context';
import CodeEditor from './CodeEditor';
import LangSelector from './LangSelector';

const Editor = () => {
    const { room } = React.useContext(RoomContext);
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <CodeEditor />
                </Col>
                <Col span={10}>
                    <h1>{room?.roomName}</h1>
                    <h2>Room ID : {room?._id}</h2>
                    <p>
                        {room?.users.map((user) => (
                            <li>{user.username}</li>
                        ))}
                    </p>

                    <LangSelector />
                </Col>
            </Row>
        </>
    );
};

export default Editor;
