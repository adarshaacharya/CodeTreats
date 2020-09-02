import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import RoomContext from '_context/room/room.context';
import styles from './style.module.css';
import history from 'utils/history';
import socket from 'config/socket/socket';

interface IVal {
    username: string;
    roomName: string;
}

const CreateRoomForm = () => {
    const { createRoom, room } = React.useContext(RoomContext);
    React.useEffect(() => {
        if (room) {
            history.push(`/room/${room._id}`);
        }
    }, [room]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };

    const onFormSubmit = (values: IVal) => {
        createRoom(values);
    };

    const [form] = Form.useForm();
    return (
        <>
            <div>
                <Card type='inner' bordered={false} className={styles.innerCard}>
                    <Form {...layout} layout='vertical' form={form} onFinish={onFormSubmit} size='large'>
                        <Form.Item
                            name='username'
                            label='Username'
                            rules={[{ required: true, message: "Username can't be empty" }]}
                            className='py'
                        >
                            <Input placeholder='Enter your name...' />
                        </Form.Item>
                        <Form.Item
                            name='roomName'
                            label='Room Name'
                            rules={[{ required: true, message: "Room name can't be empty" }]}
                            className='py'
                        >
                            <Input placeholder='Enter unique room name..' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Create Room
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default CreateRoomForm;
