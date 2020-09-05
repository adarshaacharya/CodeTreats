import React from 'react';
import { Drawer, Button } from 'antd';
import RoomContext from '_context/room/room.context';
import ActiveUsers from './ActiveUsers';
import ChatBox from './ChatBox';

const RoomDrawer = () => {
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type='primary' onClick={showDrawer}>
                Open
            </Button>

            <Drawer title='Chat Box' placement='right' closable={false} onClose={onClose} visible={visible}>
                <ActiveUsers />
                <ChatBox />
            </Drawer>
        </>
    );
};

export default RoomDrawer;
