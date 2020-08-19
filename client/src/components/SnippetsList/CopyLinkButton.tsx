import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { notify } from 'layout';
import { useSfx } from 'hooks/use-sfx';

type Props = {
    id: string;
};

const CopyLinkButton: React.FC<Props> = ({ id }) => {
    const [copied, setCopied] = React.useState(false);
    const { playClick } = useSfx();

    const onLinkCopy = () => {
        setCopied(true);
        notify.success('Link copied to clipboard. 🦄', 2000);
        playClick();
    };

    return (
        <>
            <CopyToClipBoard text={`http://localhost:3000/snippets/${id}`} onCopy={onLinkCopy}>
                <button className='copy'>Copy Link</button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
