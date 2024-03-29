import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Input, Tooltip } from 'antd';
import socket from 'config/socket/socket';
import { SOCKETS_EVENT_REALTIME_INPUT } from 'constants/socketEvents';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import { UPDATE_ROOM_INPUT } from '_context/types';

const INPUT_TOOLTIP =
    "Only provide input if you ask user for input, else leave empty. Some browser based language like Javascript, Typescipt doesn't accept terminal inputs.";
const { TextArea } = Input;

const RoomInput = () => {
    const { updateRoomInput, _id, roomInput } = useRoomContext();

    React.useEffect(() => {
        socket.on(UPDATE_ROOM_INPUT, (input: string) => {
            updateRoomInput(input);
        });
        //eslint-disable-next-line
    }, []);

    const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        const value = event.currentTarget.value;
        updateRoomInput(value);

        const body = {
            roomID: _id,
            value,
        };

        socket.emit(SOCKETS_EVENT_REALTIME_INPUT, body);
    };
    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Custom Input (stdin) &nbsp;
                <Tooltip title={INPUT_TOOLTIP}>
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
