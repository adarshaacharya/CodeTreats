import { Drawer } from 'antd';
import React from 'react';
import ActiveUsers from './ActiveUsers';
import ChatInput from './ChatInput';
import Messages from './Messages';

type Props = {
    visible: boolean;
    onClose: () => void;
};

const ChatDrawer: React.FC<Props> = ({ visible, onClose }) => {
    return (
        <>
            <Drawer placement='right' closable={false} onClose={onClose} visible={visible} width={300}>
                <ActiveUsers />
                <Messages />
                <ChatInput />
            </Drawer>
        </>
    );
};

export default ChatDrawer;
