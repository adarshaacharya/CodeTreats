import { PoweroffOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import socket from 'config/socket/socket';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';

const LeaveRoom = () => {
    const { _id, currentUser, leaveRoom } = useRoomContext();

    const leaveCurrentRoom = () => {
        const body = {
            roomID: _id,
            username: currentUser,
        };
        socket.emit('leave:room', body);
        leaveRoom();
    };

    const confirm = () => leaveCurrentRoom();
    const cancel = () => message.error('You are safe 😇');

    return (
        <>
            <Popconfirm
                title='Are you sure to leave this room?'
                onConfirm={confirm}
                onCancel={cancel}
                okText='Yes'
                cancelText='No'
            >
                <Button type='primary' danger shape='round' icon={<PoweroffOutlined />}>
                    Leave Room
                </Button>
            </Popconfirm>
        </>
    );
};

export default LeaveRoom;
