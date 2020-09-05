import React from 'react';
import style from './style.module.css';
import { Input, Divider } from 'antd';

const { TextArea } = Input;

const ChatInput = () => {
    return (
        <>
            <div className={style.chatInput}>
                <TextArea rows={3} placeholder='Type msg here.'></TextArea>
                <p className={style.chatInputPrefix}>Hit enter to send message</p>
            </div>
        </>
    );
};

export default ChatInput;
