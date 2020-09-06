import { message } from 'antd';
import { useSfx } from 'hooks';
import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import style from './style.module.css';

type Props = {
    url: string;
};

const CopyLinkButton: React.FC<Props> = ({ url }) => {
    const [, setCopied] = React.useState(false);
    const [copiedText, setCopiedText] = React.useState('Copy Link');
    const { playClick } = useSfx();

    const onLinkCopy = () => {
        setCopied(true);
        setCopiedText('Copied');
        message.success('Link copied to clipboard. 🦄');
        playClick();
        setInterval(() => {
            setCopiedText('Copy Link');
        }, 3000);
    };

    return (
        <>
            <CopyToClipBoard text={`http://codetreats.herokuapp.com${url}`} onCopy={onLinkCopy}>
                <button className={style.copy}>{copiedText}</button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
