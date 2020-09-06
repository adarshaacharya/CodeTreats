import { Button, Drawer } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import socket from 'config/socket/socket';
import React from 'react';
import RoomContext from '_context/room/room.context';
import ActiveUsers from './ActiveUsers';
import ChatInput from './ChatInput';
import Messages from './Messages';

interface IMessages {
    text: string;
    sender: string;
    notification?: boolean;
}

interface IMessage {
    sender: string;
    roomID: string;
    text: string;
}

const RoomDrawer = () => {
    const { _id } = React.useContext(RoomContext);
    const [visible, setVisible] = React.useState(false);
    const [messages, setMessages] = React.useState<IMessages[]>([]);
    const [message, setMessage] = React.useState('');

    // when someone joins or create room send msg to everyone
    React.useEffect(() => {
        socket.on('update:message', (message: IMessages) => {
            setMessages((messages) => [...messages, message]);
        });
    }, []);

    const onMessageChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        setMessage(event.currentTarget.value);
    };

    const sendMessage = () => {
        const body: IMessage = {
            roomID: _id,
            sender: 'Ram',
            text: message,
        };
        socket.emit('realtime:message', body, () => setMessage(''));
    };

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type='primary' shape="round"  onClick={showDrawer} className='my-2' icon={<SendOutlined />}>
                Show Chatbox
            </Button>

            <Drawer placement='right' closable={false} onClose={onClose} visible={visible} width={300}>
                <ActiveUsers />
                <Messages messages={messages} />
                <ChatInput sendMessage={sendMessage} message={message} onMessageChange={onMessageChange} />
            </Drawer>
        </>
    );
};

export default RoomDrawer;
