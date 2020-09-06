import { Alert, Divider } from 'antd';
import { Message } from 'layout';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.css';

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
                            <div className={style.message}>
                                {' '}
                                <Alert message={message.text} type='info' showIcon />
                            </div>
                        )}

                        {!message.notification && (
                            <div className={style.message}>
                                <Message text={message.text} sender={message.sender} />
                            </div>
                        )}
                    </div>
                ))}
            </ScrollToBottom>
        </>
    );
};

export default Messages;
