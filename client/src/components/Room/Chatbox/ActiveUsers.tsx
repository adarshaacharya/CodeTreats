import { UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Space } from 'antd';
import onlineIcon from 'assets/img/onlineIcon.png';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useRoomContext } from '_context/room/room.context';
import style from './style.module.css';

const ActiveUsers = () => {
    const { activeUsers } = useRoomContext();

    if (activeUsers.length < 1) return <p>No users online.</p>;

    return (
        <>
            <Divider orientation='left' plain>
                Active ( {activeUsers.length} )
            </Divider>
            <ScrollToBottom className={style.activeUsers}>
                <div>
                    {activeUsers.map((user) => (
                        <div key={user.socketID} className='py pointer'>
                            <Space size='middle'>
                                <img src={onlineIcon} alt='online icon' />
                                <Avatar size='small' icon={<UserOutlined />} />
                                {user.username}
                            </Space>
                        </div>
                    ))}
                </div>
            </ScrollToBottom>
        </>
    );
};

export default ActiveUsers;
