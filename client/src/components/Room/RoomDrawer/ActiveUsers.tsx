import React from 'react';
import RoomContext from '_context/room/room.context';

const ActiveUsers = () => {
    const { activeUsers } = React.useContext(RoomContext);

    if (activeUsers.length < 1) return <p>No users online.</p>;

    return (
        <>
            <h3>Active Users</h3>
            <p>
                {activeUsers.map((user) => (
                    <li key={user.socketID}>
                        <>{user.username}</>
                    </li>
                ))}
            </p>
        </>
    );
};

export default ActiveUsers;
