import { CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const CodeExec = () => {
    return (
        <Button size='large' type='primary' icon={<CaretRightOutlined />}>
            Exec Code
        </Button>
    );
};

export default CodeExec;
