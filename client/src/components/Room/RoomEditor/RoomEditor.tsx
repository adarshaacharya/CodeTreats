import { ControlledEditor } from '@monaco-editor/react';
import { editorOptions } from 'config/editor/options';
import socket from 'config/socket/socket';
import { SOCKETS_EVENT_REALTIME_CODE, SOCKETS_EVENT_UPDATE_CODE } from 'constants/socketEvents';
import { Spinner } from 'layout';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import { useThemeContext } from '_context/theme/theme.context';

const RoomEditor: React.FC = () => {
    const { _id, roomCode, updateRoomCode, roomLanguage } = useRoomContext();
    const { theme } = useThemeContext();

    React.useEffect(() => {
        socket.on(SOCKETS_EVENT_UPDATE_CODE, (code: string) => {
            updateRoomCode(code);
        });
        return () => {
            socket.removeAllListeners();
        };

        //eslint-disable-next-line
    }, []);

    const handleEditorChange = (ev?: object, value?: string) => {
        updateRoomCode(value!);
        const body = {
            value,
            roomID: _id,
        };
        socket.emit(SOCKETS_EVENT_REALTIME_CODE, body);
    };

    return (
        <>
            <ControlledEditor
                height='100%'
                theme={theme}
                language={roomLanguage}
                value={roomCode}
                options={editorOptions}
                loading={<Spinner />}
                onChange={handleEditorChange}
            />
        </>
    );
};

export default RoomEditor;
