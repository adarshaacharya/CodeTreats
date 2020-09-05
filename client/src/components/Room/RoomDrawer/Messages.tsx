import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import style from './style.module.css';
import { Divider, Alert } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface IMessage {
    text: string;
    notification?: boolean;
}

type Props = {
    messages: IMessage[];
};

const Messages: React.FC<Props> = ({ messages }) => {
    return (
        <>
            <ScrollToBottom className={style.messages}>
                {messages.map((message) => (
                    <div key={Date.now()}>
                        {message.notification && <Alert message={message.text} type='info' showIcon />}
                    </div>
                ))}
            </ScrollToBottom>
        </>
    );
};

export default Messages;
