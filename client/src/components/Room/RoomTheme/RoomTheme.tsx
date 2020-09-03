import { Divider, Select } from 'antd';
import { defaultThemes, monacoThemes } from 'config/editor/themes';
import React from 'react';
import { defineTheme } from 'utils/define-theme';
import socket from 'config/socket/socket';
import RoomContext from '_context/room/room.context';

const { Option } = Select;
const RoomTheme = () => {
    const { _id } = React.useContext(RoomContext);
    const [theme, setTheme] = React.useState('dark');

    React.useEffect(() => {
        socket.on('update:theme', (theme: string) => {
            setTheme(theme);
        });
    }, [theme]);

    const handleThemChange = (theme: string) => {
        if (defaultThemes.includes(theme)) {
            setTheme(theme);
        } else {
            defineTheme(theme).then((_) => setTheme(theme));
        }

        const body = {
            roomID: _id,
            theme,
        };
        socket.emit('realtime:theme', body);
    };

    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Select theme{' '}
            </Divider>
            <Select
                showSearch
                size='large'
                style={{ width: '100%' }}
                onChange={handleThemChange}
                defaultValue='dark'
                className='my-1'
                autoFocus
                value={theme}
            >
                {defaultThemes.map((theme) => (
                    <Option value={theme} key={theme}>
                        {theme}
                    </Option>
                ))}

                {monacoThemes
                    .filter((theme) => !theme.includes(' '))
                    .map((theme) => (
                        <Option value={theme} key={theme}>
                            {theme}
                        </Option>
                    ))}
            </Select>
        </>
    );
};

export default RoomTheme;
