import React from 'react';
import { List, Typography, Divider } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const Refactor = () => {
    return (
        <>
            <Divider orientation='left'>Default Size</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <Divider orientation='left'>Small Size</Divider>
            <List
                size='small'
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider orientation='left'>Large Size</Divider>
            <List
                size='large'
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </>
    );
};

export default Refactor;
