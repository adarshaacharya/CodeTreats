import { ControlledEditor } from '@monaco-editor/react';
import { editorOptions } from 'config/editor/options';
import socket from 'config/socket/socket';
import { Spinner } from 'layout';
import React from 'react';
import RoomContext from '_context/room/room.context';

const RoomEditor: React.FC = () => {
    const { _id, roomCode, updateRoomCode } = React.useContext(RoomContext);

    React.useEffect(() => {
        socket.on('update:code', (code: string) => {
            updateRoomCode(code, _id);
        });
    }, [roomCode]);

    const handleEditorChange = (ev?: object, value?: string) => {
        updateRoomCode(value!, _id);
        const body = {
            value,
            roomID: _id,
        };
        socket.emit('realtime:code', body);
    };

    return (
        <>
            <ControlledEditor
                height='100vh'
                theme='dark'
                language='javascript'
                options={editorOptions}
                value={roomCode}
                loading={<Spinner />}
                onChange={handleEditorChange}
            />
        </>
    );
};

export default RoomEditor;
