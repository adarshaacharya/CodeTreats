import { Alert, Card, Typography } from 'antd';
import React from 'react';
import RoomContext from '_context/room/room.context';
import style from './style.module.css';
const { Title, Paragraph } = Typography;

const Info = () => {
    const { roomName, _id } = React.useContext(RoomContext);

    return (
        <>
            <Card className={style.info}>
                <h3 className={style.roomTitle}> {roomName} </h3>
                <p>Copy & send the room ID below and ask your friends to join the room.</p>
                <Alert message={_id} />
            </Card>
        </>
    );
};

export default Info;
