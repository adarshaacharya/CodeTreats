import { Divider, Select } from 'antd';
import languages from 'config/editor/languages';
import React from 'react';
import socket from 'config/socket/socket';
import RoomContext from '_context/room/room.context';

const LangSelector = () => {
    const { room } = React.useContext(RoomContext);
    const [lang, setLang] = React.useState('javascript');
    const { Option } = Select;

    React.useEffect(() => {
        setLang(lang);
    }, []);
    
    React.useEffect(() => {
        socket.on('update:lang', (lang: string) => {
            console.log(lang, 'client');
            setLang(lang);
        });
    }, [lang]);

    const onLanguageChange = (value: string) => {
        setLang(value);
        const body = {
            roomID: room?._id,
            value,
        };
        socket.emit('realtime:lang', body);
    };

    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Select language{' '}
            </Divider>
            <Select
                showSearch
                style={{ width: '100%' }}
                onChange={onLanguageChange}
                value={lang}
                autoFocus
                size='large'
                className='my-1'
            >
                {languages.map((language) => (
                    <Option value={language.value} key={language.value}>
                        {language.label}
                    </Option>
                ))}
            </Select>
        </>
    );
};

export default LangSelector;
