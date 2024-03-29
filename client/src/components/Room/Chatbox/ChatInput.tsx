import { Input } from 'antd';
import socket from 'config/socket/socket';
import { SOCKETS_EVENTS_REALTIME_MESSAGE } from 'constants/socketEvents';
import { useSfx } from 'hooks';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import style from './style.module.css';

const { TextArea } = Input;

interface IMessage {
    sender: string;
    roomID: string;
    text: string;
}

const ChatInput: React.FC = () => {
    const { _id, currentUser } = useRoomContext();
    const [message, setMessage] = React.useState('');
    const { playPop } = useSfx();

    const onMessageChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
        setMessage(event.currentTarget.value);
    };

    const sendMessage = () => {
        const body: IMessage = {
            roomID: _id,
            sender: currentUser,
            text: message,
        };

        // send msg to server
        socket.emit(SOCKETS_EVENTS_REALTIME_MESSAGE, body, () => setMessage(''));
        playPop();
    };

    return (
        <>
            <div className={style.chatInput}>
                <TextArea
                    rows={2}
                    placeholder='Type msg here.'
                    onPressEnter={sendMessage}
                    value={message}
                    onChange={onMessageChange}
                ></TextArea>
                <p className={style.chatInputPrefix}>Hit enter to send message</p>
            </div>
        </>
    );
};

export default ChatInput;
