import React from 'react';
import RoomContext from '_context/room/room.context';

const Info = () => {
    const { roomName, _id, activeUsers } = React.useContext(RoomContext);

    return (
        <>
            <h1>{roomName}</h1>
            <h2>Room ID : {_id}</h2>
      
        </>
    );
};

export default Info;
