import React from 'react';

interface IMessage {
    text: string;
}

type Props = {
    messages: IMessage[];
};

const Messages: React.FC<Props> = ({ messages }) => {
    if (messages.length < 1) return <p>No message send.</p>;
    return (
        <>
            {messages.map((message, i) => (
                <li key={i}>{message.text}</li>
            ))}
        </>
    );
};

export default Messages;
