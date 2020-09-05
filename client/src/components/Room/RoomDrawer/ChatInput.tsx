import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const ChatInput = () => {
    return (
        <>
            <TextArea rows={4} placeholder='Type msg here.'></TextArea>
            <p className='chatinput-prefix'>Hit enter to send msg</p>
        </>
    );
};

export default ChatInput;
