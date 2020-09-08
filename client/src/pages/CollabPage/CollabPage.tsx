import { Card, Tabs } from 'antd';
import React from 'react';
import CreateRoom from 'components/CreateRoom';
import JoinRoom from 'components/JoinRoom';
import styles from './style.module.css';
const { TabPane } = Tabs;

const CollabPage = () => {
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
