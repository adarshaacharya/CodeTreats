import { Alert } from 'antd';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import style from './style.module.css';
import { v4 as uuidv4 } from 'uuid';

interface IMessages {
    text: string;
    notification?: boolean;
}

type Props = {
    messages: IMessages[];
};

const Messages: React.FC<Props> = ({ messages }) => {
    return (
        <>
            <ScrollToBottom className={style.messages}>
                {messages.map((message) => (
                    <div key={uuidv4()}>
                        {message.notification && <Alert message={message.text} type='info' showIcon className='my' />}
                    </div>
                ))}
            </ScrollToBottom>
        </>
    );
};

export default Messages;
