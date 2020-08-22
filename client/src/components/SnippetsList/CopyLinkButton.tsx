import { useSfx } from 'hooks';
import { notify } from 'layout';
import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import styles from './style.module.css';

type Props = {
    id: string;
};

const CopyLinkButton: React.FC<Props> = ({ id }) => {
    // eslint-disable-next-line
    const [copied, setCopied] = React.useState(false);
    const [copiedText, setCopiedText] = React.useState('Copy URL');
    const { playClick } = useSfx();

    const onLinkCopy = () => {
        setCopied(true);
        setCopiedText('Copied');
        notify.success('Link copied to clipboard. 🦄', 2000);
        playClick();

        setInterval(() => {
            setCopiedText('Copy URL');
        }, 3000);
    };

    return (
        <>
            <CopyToClipBoard text={`http://localhost:3000/snippets/${id}`} onCopy={onLinkCopy}>
                <button className={styles.copy}>{copiedText}</button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
