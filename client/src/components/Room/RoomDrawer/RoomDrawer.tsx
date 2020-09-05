import { Button, Drawer } from 'antd';
import socket from 'config/socket/socket';
import React from 'react';
import ActiveUsers from './ActiveUsers';
import Messages from './Messages';
import RoomContext from '_context/room/room.context';
import ChatInput from './ChatInput';

interface IMessages {
    text: string;
    notification?: boolean;
}

interface IMessage {
    sender: string;
    roomID: string;
    message: string;
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
    console.log(message)

    const sendMessage = () => {
        const body : IMessage = {
            roomID: _id,
            sender: 'Ram',
            message,
        };
        console.log(body)
        socket.emit('realtime:message', body, () => setMessage(""));
    };

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
                <ChatInput sendMessage={sendMessage} message={message}  onMessageChange={onMessageChange}/>
            </Drawer>
        </>
    );
};

export default RoomDrawer;
