import { Spin } from 'antd';
import React from 'react';
import styles from './style.module.css';

export const Spinner = () => {
    return (
        <div className={styles.container}>
            <Spin size='large' />
        </div>
    );
};
