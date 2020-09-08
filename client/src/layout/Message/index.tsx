import React from 'react';
import style from './style.module.css';

type Props = {
    sender: string;
    text: string;
};
export const Message: React.FC<Props> = ({ text, sender }) => {
    return (
        <div className={style.msg}>
            <p className={style.sender}>{sender}</p>
            <p className={style.text}>{text}</p>
        </div>
    );
};
