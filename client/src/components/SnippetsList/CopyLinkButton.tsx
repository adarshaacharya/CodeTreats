import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';

type Props = {
    id: string;
};

const CopyLinkButton: React.FC<Props> = ({ id }) => {
    const [copied, setCopied] = React.useState(false);

    return (
        <>
            <CopyToClipBoard text={`http://localhost:3000/snippets/${id}`} onCopy={() => setCopied(true)}>
                <button className='copy'>Copy link </button>
            </CopyToClipBoard>
        </>
    );
};

export default CopyLinkButton;
