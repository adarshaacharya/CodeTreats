import { Spin } from 'antd';
import React from 'react';

const container = {
    height: '100vh',
    textAlign: 'center' as 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: '20px',
    // padding: '30px 50px',
    // margin: 'auto',
};

const Spinner: React.FC = () => {
    return (
        <div style={container}>
            <Spin size='large' />
        </div>
    );
};

export default Spinner;
