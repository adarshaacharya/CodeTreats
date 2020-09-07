import { Alert, Divider } from 'antd';
import socket from 'config/socket/socket';
import { Message } from 'layout';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { v4 as uuidv4 } from 'uuid';
import RoomContext from '_context/room/room.context';
import style from './style.module.css';

interface IMessages {
    text: string;
    sender: string;
    notification?: boolean;
}

const Messages = () => {
    const { roomMessages, updateMessages } = React.useContext(RoomContext);



    return React.useMemo(() => {
        return (
            <>
                <Divider orientation='left' plain>
                    Messages
                </Divider>
                <ScrollToBottom className={style.messages}>
                    {roomMessages.map((message) => (
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
    }, [roomMessages]);
};

export default Messages;
