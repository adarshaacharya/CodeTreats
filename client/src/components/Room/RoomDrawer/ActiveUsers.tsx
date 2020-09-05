import React from 'react';
import RoomContext from '_context/room/room.context';
import style from './style.module.css';

const ActiveUsers = () => {
    const { activeUsers } = React.useContext(RoomContext);

    if (activeUsers.length < 1) return <p>No users online.</p>;

    return (
        <>
            <div className={style.activeUsers}>
                <h3>Active Users</h3>
                <p>
                    {activeUsers.map((user) => (
                        <li key={user.socketID}>
                            <>{user.username}</>
                        </li>
                    ))}
                </p>
            </div>
        </>
    );
};

export default ActiveUsers;
