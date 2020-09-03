import React from 'react';
import RoomContext from '_context/room/room.context';

const Info = () => {
    const { room } = React.useContext(RoomContext);

    return (
        <>
            <h1>{room?.roomName}</h1>
            <h2>Room ID : {room?._id}</h2>
            <p>
                {room?.activeUsers.map((user) => (
                    <li>{user.username}</li>
                ))}
            </p>
        </>
    );
};

export default Info;
