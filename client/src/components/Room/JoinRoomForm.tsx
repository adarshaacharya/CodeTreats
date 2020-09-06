import { Button, Card, Form, Input, message, notification } from 'antd';
import React from 'react';
import history from 'utils/history';
import RoomContext from '_context/room/room.context';
import styles from './style.module.css';
import { useSfx } from 'hooks';

interface IVal {
    roomID: string;
    username: string;
}
const JoinRoomForm = () => {
    const { joinRoom, _id, roomLoaded } = React.useContext(RoomContext);
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
        joinRoom(values);

        playIpl();
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
                        rules={[{ required: true, message: "Username can't be empty" }]}
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

export default JoinRoomForm;
