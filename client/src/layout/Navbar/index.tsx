import { Menu } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const items = [
    { key: '1', label: 'Home', path: '/' },
    { key: '2', label: 'Snippets', path: '/snippets' },
];

export const Navbar: React.FC = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [current, setCurrent] = React.useState(items.find((_item) => location.pathname === _item.path)?.key); // stores current path key

    // change page route
    const handleClick = (item: any) => {
        const clicked = items.find((_item) => _item.key === item.key);
        history.push(clicked?.path as string);
    };
    React.useEffect(() => {
        setCurrent(items.find((_item) => location.pathname === _item.path)?.key); // change key on location change
    }, [location]);

    // gotcha for single snippet
    React.useEffect(() => {
        if (location.pathname.startsWith('/snippets')) {
            setCurrent('2');
        }
    }, [location]);

    return (
        <div className='mt-1 mx-1'>
            <Menu mode='horizontal' selectedKeys={[current!]} onClick={handleClick}>
                {items.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
        </div>
    );
};
