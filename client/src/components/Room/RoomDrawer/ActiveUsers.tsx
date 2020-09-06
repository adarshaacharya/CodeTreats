import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Divider } from 'antd';
import onlineIcon from 'assets/img/onlineIcon.png';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import RoomContext from '_context/room/room.context';
import style from './style.module.css';

const ActiveUsers = () => {
    const { activeUsers } = React.useContext(RoomContext);

    if (activeUsers.length < 1) return <p>No users online.</p>;

    return (
        <>
            <Divider orientation='left' plain>
                Active ( {activeUsers.length} )
            </Divider>
            <ScrollToBottom className={style.activeUsers}>
                <p>
                    {activeUsers.map((user) => (
                        <>
                            <Space key={user.socketID} size='middle'>
                                <img src={onlineIcon} alt='online icon' />
                                <Avatar size='small' icon={<UserOutlined />} />
                                {user.username}
                            </Space>
                        </>
                    ))}
                </p>
            </ScrollToBottom>
        </>
    );
};

export default ActiveUsers;
