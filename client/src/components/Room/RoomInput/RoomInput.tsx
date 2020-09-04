import { Input, Divider, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import RoomContext from '_context/room/room.context';
import socket from 'config/socket/socket';

const text =
    "Only provide input if you ask user for input, else leave empty. Some browser based language like Javascript, Typescipt doesn't accept terminal inputs.";
const { TextArea } = Input;

const RoomInput = () => {
    const { updateRoomInput, _id, roomInput } = React.useContext(RoomContext);

    React.useEffect(() => {
        socket.on('update:input', (input: string) => {
            updateRoomInput(input);
        });
    }, []);

    const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        const value = event.currentTarget.value;
        updateRoomInput(value);

        const body = {
            roomID: _id,
            value,
        };

        socket.emit('realtime:input', body);
    };
    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Custom Input (stdin) &nbsp;
                <Tooltip title={text}>
                    <ExclamationCircleOutlined />
                </Tooltip>
            </Divider>
            <TextArea
                placeholder='Enter your input here..'
                onChange={handleInputChange}
                rows={3}
                value={roomInput!}
                className='font-md my-1'
            />
        </>
    );
};

export default RoomInput;
