import { Input } from 'antd';
import React from 'react';
import style from './style.module.css';

const { TextArea } = Input;

type Props = {
    sendMessage: () => void;
    message : string,
    onMessageChange : (event: React.FormEvent<HTMLTextAreaElement>) => void

};

const ChatInput: React.FC<Props> = ({sendMessage, message, onMessageChange}) => {


    return (
        <>
            <div className={style.chatInput}>
                <TextArea rows={3} placeholder='Type msg here.' onPressEnter={sendMessage} value={message} onChange={onMessageChange}></TextArea>
                <p className={style.chatInputPrefix}>Hit enter to send message</p>
            </div>
        </>
    );
};

export default ChatInput;
