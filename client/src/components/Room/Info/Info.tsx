import React from 'react';
import RoomContext from '_context/room/room.context';
import { Spinner } from 'layout';

const Info = () => {
    const { roomName, _id, activeUsers } = React.useContext(RoomContext);

    if (activeUsers.length < 1) return <p>Loading users..</p>;
    console.log(activeUsers)
    return (
        <>
            <h1>{roomName}</h1>
            <h2>Room ID : {_id}</h2>
            <p>
                {activeUsers.map((user) => (
                    <li key={user.socketID}>
                        <>
                             {user.username}
                        </>
                    </li>
                ))}
            </p>
        </>
    );
};

export default Info;
