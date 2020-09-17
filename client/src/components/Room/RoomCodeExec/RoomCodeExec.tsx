import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import socket from 'config/socket/socket';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import { IOutput } from '_context/room/room.type';

const RoomCodeExec = () => {
    const { _id, roomCode, loading, roomLanguage, roomInput, updateRoomOutput, setLoading } = useRoomContext()

    // initialize socket once using lifecycle method so that it will listen from next time
    // here both output and loading of output is decided so both are initialized
    React.useEffect(() => {
        socket.on('update:output', (output: IOutput) => {
            updateRoomOutput(output);
        });

        socket.on('update:loading', () => {
            setLoading(_id);
        });
        //eslint-disable-next-line
    }, []);

    const onCodeSubmit = (code: string, language: string, input: string) => {
        socket.emit('realtime:loading', _id);

        const payload = {
            language,
            sourceCode: code,
            userInput: input,
            roomID: _id,
        };
        socket.emit('realtime:run', payload);
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

export default RoomCodeExec;
