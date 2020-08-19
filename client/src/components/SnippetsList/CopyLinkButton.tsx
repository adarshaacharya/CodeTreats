import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import { notify } from 'layout';

type Props = {
    id: string;
};

const CopyLinkButton: React.FC<Props> = ({ id }) => {
    const [copied, setCopied] = React.useState(false);

    const onLinkCopy = () => {
        setCopied(true);
        notify.success('Link copied.', 1000);
    };

    console.log(copied, 'console test');
    return (
        <>
            <CopyToClipBoard text={`http://localhost:3000/snippets/${id}`} onCopy={onLinkCopy}>
                <button className='copy'>{copied ? 'Link Copied' : 'Copy Link'}</button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
