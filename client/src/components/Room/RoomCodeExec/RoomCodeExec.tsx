import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import socket from 'config/socket/socket';
import { SOCKETS_EVENTS_REALTIME_LOADING, SOCKETS_EVENTS_REALTIME_RUN, SOCKETS_EVENTS_UPDATE_LOADING, SOCKETS_EVENTS_UPDATE_OUTPUT } from 'constants/sockets';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import { IOutput } from '_context/room/room.type';

const RoomCodeExec = () => {
    const { _id, roomCode, loading, roomLanguage, roomInput, updateRoomOutput, setLoading } = useRoomContext();

    // initialize socket once using lifecycle method so that it will listen from next time
    // here both output and loading of output is decided so both are initialized
    React.useEffect(() => {
        socket.on(SOCKETS_EVENTS_UPDATE_OUTPUT, (output: IOutput) => {
            updateRoomOutput(output);
        });

        socket.on(SOCKETS_EVENTS_UPDATE_LOADING, () => {
            setLoading(_id);
        });
        //eslint-disable-next-line
    }, []);

    const onCodeSubmit = (code: string, language: string, input: string) => {
        socket.emit(SOCKETS_EVENTS_REALTIME_LOADING, _id);

        const payload = {
            language,
            sourceCode: code,
            userInput: input,
            roomID: _id,
        };
        socket.emit(SOCKETS_EVENTS_REALTIME_RUN, payload);
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
