import { Card, Tabs } from 'antd';
import React from 'react';
import CreateRoomForm from './CreateRoomForm';
import JoinRoomForm from './JoinRoomForm';
import styles from './style.module.css';
const { TabPane } = Tabs;

const Room = () => {
    return (
        <>
            <Card className={`${styles.container} ${styles.outerCard}`}>
                <Tabs defaultActiveKey='create' size='large'>
                    <TabPane key='create' tab='Create Room'>
                        <CreateRoomForm />
                    </TabPane>
                    <TabPane key='join' tab='Join Room'>
                        <JoinRoomForm />
                    </TabPane>
                </Tabs>
            </Card>
        </>
    );
};

export default Room;
