import { ControlledEditor } from '@monaco-editor/react';
import { editorOptions } from 'config/editor/options';
import { Spinner } from 'layout';
import React from 'react';
import socket from 'config/socket/socket';
import RoomContext from '_context/room/room.context';

const CodeEditor: React.FC = () => {
    const { room } = React.useContext(RoomContext);
    const [code, setCode] = React.useState('');

    React.useEffect(() => {
        socket.on('update:code', (code: string) => {
            setCode(code);
        });
    }, [code]);

    const handleEditorChange = (ev?: object, value?: string) => {
        setCode(value!);
        const body = {
            value,
            roomID: room?._id,
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
                value={code}
                loading={<Spinner />}
                onChange={handleEditorChange}
            />
        </>
    );
};

export default CodeEditor;
