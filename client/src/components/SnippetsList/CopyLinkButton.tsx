import { useSfx } from 'hooks';
import { notify } from 'layout';
import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import style from './style.module.css';
import { message } from 'antd';

type Props = {
    id: string;
};

const END_POINT = 'http://codetreats.herokuapp.com/';

const CopyLinkButton: React.FC<Props> = ({ id }) => {
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
            <CopyToClipBoard text={`END_POINT${id}`} onCopy={onLinkCopy}>
                <button className={style.copy}>{copiedText}</button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
