import { CodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar: React.FC = () => {
    const [current, setCurrent] = React.useState('home');

    const handleClick = (event: any) => setCurrent(event.key);

    return (
        <div className="mt-1 mx-1">
                <Menu mode='horizontal' defaultSelectedKeys={['home']} selectedKeys={[current]} onClick={handleClick} >
                    <Menu.Item key='home' icon={<HomeOutlined />}>
                        <Link to='/'>Home </Link>
                    </Menu.Item>
                    <Menu.Item key='snippets' icon={<CodeOutlined />}>
                        <Link to='/snippets'>Snippets </Link>
                    </Menu.Item>
                </Menu>
        </div>
    );
};
