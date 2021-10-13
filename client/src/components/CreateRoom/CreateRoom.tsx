import { Button, Card, Form, Input, message } from 'antd';
import { useSfx } from 'hooks';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import styles from './style.module.css';

interface IVal {
    username: string;
    roomName: string;
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

const CreateRoom = () => {
    const { createRoom } = useRoomContext();
    const { playIpl } = useSfx();

    const onFormSubmit = (values: IVal) => {
        createRoom(values);
        // playIpl();
        // message.success('New room created ! 🔥 ');
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
                            rules={[
                                { required: true, message: "Username can't be empty" },
                                { max: 8, message: 'Username must be maximum 8 characters.' },
                            ]}
                            className='py'
                        >
                            <Input placeholder='Enter your name...' />
                        </Form.Item>
                        <Form.Item
                            name='roomName'
                            label='Room Name'
                            rules={[
                                { required: true, message: "Room name can't be empty" },
                                { max: 8, message: 'Room name must be maximum 8 characters.' },
                            ]}
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

export default CreateRoom;
