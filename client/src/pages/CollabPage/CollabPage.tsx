import { Card, Tabs } from 'antd';
import React from 'react';
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';
import styles from './style.module.css';
import RoomContext from '_context/room/room.context';
import history from 'utils/history';
const { TabPane } = Tabs;

const CollabPage = () => {
    const { roomLoaded, _id } = React.useContext(RoomContext);

    // if already room created join that room
    React.useEffect(() => {
        if (roomLoaded) history.push(`/room/${_id}`);
    }, []);

    return (
        <>
            <Card className={`${styles.container} ${styles.outerCard}`}>
                <Tabs defaultActiveKey='create' size='large'>
                    <TabPane key='create' tab='Create Room'>
                        <CreateRoom />
                    </TabPane>
                    <TabPane key='join' tab='Join Room'>
                        <JoinRoom />
                    </TabPane>
                </Tabs>
            </Card>
        </>
    );
};

export default CollabPage;
