import { Alert, Card, message, Row } from 'antd';
import { useSfx } from 'hooks';
import React from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import RoomContext from '_context/room/room.context';
import style from './style.module.css';

const Info = () => {
    const { roomName, _id, currentUser } = React.useContext(RoomContext);
    const { playClick } = useSfx();

    const [, setCopied] = React.useState(false);
    const [copiedText, setCopiedText] = React.useState('Copy');

    const handleCopy = () => {
        setCopied(true);
        setCopiedText('Copied');
        message.success('Room ID copied to clipboard. 🦄');
        playClick();
        setInterval(() => {
            setCopiedText('Copy');
        }, 5000);
    };

    return (
        <>
            <Card className={style.info}>
                <Row>
                    <h4 className={style.welcome}>
                        Hi {currentUser} ! <br />
                        You're welcome to {roomName}{' '}
                    </h4>
                </Row>

                <p>Copy & send the room ID below and ask your friends to join the room.</p>

                <Row>
                    <Alert message={_id} />
                    <CopyToClipBoard text={_id} onCopy={handleCopy}>
                        <button className={style.copyButton}>{copiedText}</button>
                    </CopyToClipBoard>
                </Row>
            </Card>
        </>
    );
};

export default Info;
