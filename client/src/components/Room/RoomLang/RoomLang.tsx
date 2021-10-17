import { Divider, Select } from 'antd';
import languages from 'config/editor/languages';
import socket from 'config/socket/socket';
import { SOCKETS_EVENT_REALTIME_LANGUAGE, SOCKETS_EVENT_UPDATE_LANGUAGE } from 'constants/socketEvents';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';

const { Option } = Select;
const RoomLang = () => {
    const { _id, roomLanguage, updateRoomLanguage } = useRoomContext();

    React.useEffect(() => {
        socket.on(SOCKETS_EVENT_UPDATE_LANGUAGE, (lang: string) => {
            updateRoomLanguage(lang);
        });
        //eslint-disable-next-line
    }, []);

    const onLanguageChange = (value: string) => {
        updateRoomLanguage(value);
        const body = {
            roomID: _id,
            value,
        };
        socket.emit(SOCKETS_EVENT_REALTIME_LANGUAGE, body);
    };

    return (
        <>
            <Divider orientation='center' plain>
                {' '}
                Select language{' '}
            </Divider>
            <Select
                showSearch
                style={{ width: '100%' }}
                onChange={onLanguageChange}
                value={roomLanguage}
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

export default RoomLang;
