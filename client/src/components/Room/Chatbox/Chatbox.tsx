import { SendOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import socket from 'config/socket/socket';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import { IUser } from '_context/room/room.type';
import ChatDrawer from './ChatDrawer';

interface IMessages {
    text: string;
    sender: string;
    notification?: boolean;
}

const Chatbox = () => {
    const { roomMessages, updateMessages } = useRoomContext();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        // receive msg from server
        socket.on('update:message', (message: IMessages) => {
            updateMessages(message);
        });

        socket.on('update:active-users', (users: IUser) => [console.log('users from client', users)]);

        return () => {
            socket.removeAllListeners();
        };
        //eslint-disable-next-line
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Badge count={roomMessages.length} className='my-2' overflowCount={10}>
                <Button type='primary' shape='round' onClick={showDrawer} icon={<SendOutlined />}>
                    Show Chatbox
                </Button>
            </Badge>

            <ChatDrawer onClose={onClose} visible={visible} />
        </>
    );
};

export default Chatbox;
