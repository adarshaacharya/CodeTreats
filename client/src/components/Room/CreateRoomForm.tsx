import { Button, Card, Form, Input, notification, message } from 'antd';
import React from 'react';
import history from 'utils/history';
import RoomContext from '_context/room/room.context';
import styles from './style.module.css';
import { useSfx } from 'hooks';

interface IVal {
    username: string;
    roomName: string;
}

const CreateRoomForm = () => {
    const { createRoom, _id } = React.useContext(RoomContext);

    const { playIpl } = useSfx();

    React.useEffect(() => {
        if (_id) {
            history.push(`/room/${_id}`);
        }
    }, [_id]);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
    };

    const onFormSubmit = (values: IVal) => {
        createRoom(values);
        playIpl();
        message.success('New room created ! 🔥 ');
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
