import { Button, Drawer } from 'antd';
import socket from 'config/socket/socket';
import React from 'react';
import ActiveUsers from './ActiveUsers';
import ChatBox from './ChatBox';
import Messages from './Messages';

interface IMessage {
    text: string;
    notification?: boolean;
}

const RoomDrawer = () => {
    const [visible, setVisible] = React.useState(false);
    const [messages, setMessages] = React.useState<IMessage[]>([]);

    // when someone joins or create room send msg to everyone
    React.useEffect(() => {
        socket.on('update:message', (message: IMessage) => {
            setMessages((messages) => [...messages, message]);
        });
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                Open
            </Button>

            <Drawer title='Chat Box' placement='right' closable={false} onClose={onClose} visible={visible} width={300}>
                <ActiveUsers />
                <Messages messages={messages} />
                <ChatBox />
            </Drawer>
        </>
    );
};

export default RoomDrawer;
