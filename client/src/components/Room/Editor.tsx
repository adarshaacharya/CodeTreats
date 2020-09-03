import { Col, Row } from 'antd';
import React from 'react';
import RoomContext from '_context/room/room.context';
import RoomEditor from './RoomEditor';
import RoomLang from './RoomLang';
import RoomTheme from './RoomTheme';
import Output from './Output';

const Editor = () => {
    const { room } = React.useContext(RoomContext);
    return (
        <>
            <Row className='mx-1'>
                <Col span={14}>
                    <RoomEditor />
                </Col>
                <Col span={10}>
                    <h1>{room?.roomName}</h1>
                    <h2>Room ID : {room?._id}</h2>
                    <p>
                        {room?.users.map((user) => (
                            <li>{user.username}</li>
                        ))}
                    </p>

                    <RoomLang />
                    <RoomTheme />
                    <Output />
                </Col>
            </Row>
        </>
    );
};

export default Editor;
