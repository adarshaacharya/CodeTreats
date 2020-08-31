import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import styles from './style.module.css';

interface IVal {
    username: string;
    room: string;
}
const JoinRoom = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };

    const onFormSubmit = (values: IVal) => {
        console.log(values);
    };

    const [form] = Form.useForm();
    return (
        <>
            <div className={styles.container}>
                <Card title={'Create or Join a Room 🌱'} className={styles.card}>
                    <Form {...layout} layout='vertical' form={form} onFinish={onFormSubmit} size='large'>
                        <Form.Item
                            name='username'
                            label='Username'
                            rules={[{ required: true, message: "Username can't be empty" }]}
                            className='py'
                        >
                            <Input placeholder='Enter your short name.' />
                        </Form.Item>
                        <Form.Item
                            name='room'
                            label='Room'
                            rules={[{ required: true, message: "Room name can't be empty" }]}
                            className='py'
                        >
                            <Input placeholder='Create or enter existing room name.' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default JoinRoom;