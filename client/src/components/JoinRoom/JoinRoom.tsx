import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';
import styles from './style.module.css';

interface IVal {
    roomID: string;
    username: string;
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};

const JoinRoom = () => {
    const { joinRoom } = useRoomContext();

    const onFormSubmit = (values: IVal) => {
        joinRoom(values);
    };

    const [form] = Form.useForm();
    return (
        <>
            <Card type='inner' bordered={false} className={styles.innerCard}>
                <Form {...layout} layout='vertical' form={form} onFinish={onFormSubmit} size='large'>
                    <Form.Item
                        name='roomID'
                        label='Room ID'
                        rules={[{ required: true, message: "Room ID can't be empty" }]}
                        className='py'
                    >
                        <Input placeholder='Enter room id...' />
                    </Form.Item>
                    <Form.Item
                        name='username'
                        label='Username'
                        rules={[
                            { required: true, message: "Username can't be empty" },
                            { max: 20, message: 'Username must be maximum 20 characters.' },
                        ]}
                        className='py'
                    >
                        <Input placeholder='Enter your short name...' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Join Room
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};

export default JoinRoom;
