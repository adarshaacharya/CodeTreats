import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import RoomContext from '_context/room/room.context';

const CodeExec = () => {
    const { _id, roomCode, loading, roomLanguage, submitRoomCode, roomInput } = React.useContext(RoomContext);

    const onCodeSubmit = (code: string, language: string, input: string) => {
        submitRoomCode(code, language, input, _id);
    };

    return (
        <Button
            size='large'
            type='primary'
            icon={<CaretRightOutlined />}
            onClick={() => onCodeSubmit(roomCode!, roomLanguage, roomInput!)}
            loading={loading}
        >
            Exec Code
        </Button>
    );
};

export default CodeExec;
