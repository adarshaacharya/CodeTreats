import { Alert, Divider } from 'antd';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.css';
import { Comment, Tooltip, Avatar } from 'antd';

interface IMessages {
    text: string;
    sender: string;
    notification?: boolean;
}

type Props = {
    messages: IMessages[];
};

const Messages: React.FC<Props> = ({ messages }) => {
    return (
        <>
            <Divider orientation='left' plain>
                Messages
            </Divider>
            <ScrollToBottom className={style.messages}>
                {messages.map((message) => (
                    <div key={uuidv4()}>
                        {message.notification && (
                            <p className={style.message}>
                                {' '}
                                <Alert message={message.text} type='info' showIcon />
                            </p>
                        )}

                        {!message.notification && (
                            <p className={style.message}>
                                {message.sender}
                                {message.text}
                            </p>
                        )}
                    </div>
                ))}
            </ScrollToBottom>
        </>
    );
};

export default Messages;
