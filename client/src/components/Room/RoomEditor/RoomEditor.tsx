import { ControlledEditor } from '@monaco-editor/react';
import { editorOptions } from 'config/editor/options';
import socket from 'config/socket/socket';
import { Spinner } from 'layout';
import React from 'react';
import RoomContext from '_context/room/room.context';
import ThemeContext from '_context/theme/theme.context';

const RoomEditor: React.FC = React.memo(() => {
    const { _id, roomCode, updateRoomCode, roomLanguage } = React.useContext(RoomContext);
    const { theme } = React.useContext(ThemeContext);

    // const [roomCode, setRoomCode]  = React.useState("")
    // const updateRoomCode = (code : string) => {
    //     setRoomCode(code)
    // }

    //@ TODO : Prevent unecessary re-rendering - Optimize App
    React.useEffect(() => {
        socket.on('update:code', (code: string) => {
            console.log(code);
            updateRoomCode(code);
        });
        return () => {
            socket.removeAllListeners();
        };
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
    }, [roomCode]);
});

export default RoomEditor;
