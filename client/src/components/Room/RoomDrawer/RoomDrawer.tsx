import { SendOutlined } from '@ant-design/icons';
import { Button, Drawer, Badge } from 'antd';
import socket from 'config/socket/socket';
import { useSfx } from 'hooks';
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

    const { playGoogle, playPop } = useSfx();

    React.useEffect(() => {
        socket.on('update:message', (message: IMessages) => {
            console.log('update:', message);
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
        playPop();
    };

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Badge count={messages.length} className='my-2' overflowCount={10}>
                <Button type='primary' shape='round' onClick={showDrawer} icon={<SendOutlined />}>
                    Show Chatbox
                </Button>
            </Badge>

            <Drawer placement='right' closable={false} onClose={onClose} visible={visible} width={300}>
                <ActiveUsers />
                <Messages messages={messages} />
                <ChatInput sendMessage={sendMessage} message={message} onMessageChange={onMessageChange} />
            </Drawer>
        </>
    );
};

export default RoomDrawer;
