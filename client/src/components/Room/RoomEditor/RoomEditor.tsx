import { ControlledEditor } from '@monaco-editor/react';
import { editorOptions } from 'config/editor/options';
import socket from 'config/socket/socket';
import { Spinner } from 'layout';
import React from 'react';
import RoomContext from '_context/room/room.context';

const RoomEditor: React.FC = () => {
    const { _id, roomCode, updateRoomCode } = React.useContext(RoomContext);

    //@ TODO : Prevent unecessary re-rendering - Optimize App
    React.useEffect(() => {
        socket.on('update:code', (code: string) => {
            console.log(code, 'receiving sockeet');
            updateRoomCode(code);
        });
    }, []);

    const handleEditorChange = (ev?: object, value?: string) => {
        updateRoomCode(value!);
        const body = {
            value,
            roomID: _id,
        };
        socket.emit('realtime:code', body);
    };

    return React.useMemo(() => {
        return (
            <>
                <ControlledEditor
                    height='100vh'
                    theme='dark'
                    language='javascript'
                    value={roomCode}
                    options={editorOptions}
                    loading={<Spinner />}
                    onChange={handleEditorChange}
                />
            </>
        );
    }, [roomCode])
 
};

export default RoomEditor;
