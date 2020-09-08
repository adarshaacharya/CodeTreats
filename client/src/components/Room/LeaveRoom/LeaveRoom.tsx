import React from 'react';
import { Button } from 'antd';
import RoomContext from '_context/room/room.context';
import socket from 'config/socket/socket';

const LeaveRoom = () => {
    const { _id, currentUser } = React.useContext(RoomContext);

    const leaveCurrentRoom = () => {
        const body = {
            roomID: _id,
            username: currentUser,
        };
        socket.emit('leave:room', body);
    };

    return (
        <>
            <Button onClick={leaveCurrentRoom}>Leave Room</Button>
        </>
    );
};

export default LeaveRoom;
