import { Divider, Input } from 'antd';
import React from 'react';
import { useRoomContext } from '_context/room/room.context';

const { TextArea } = Input;

const RoomOutput = () => {
    const { loading, roomOutput } = useRoomContext();

    if (loading) {
        return (
            <>
                <Divider orientation='left' plain>
                    Output
                </Divider>
                <TextArea rows={7} value='running...' className='font-md my-1 text-cyan' />
            </>
        );
    }

    let value = roomOutput?.stderr || roomOutput?.stdout || '';
    return (
        <>
            <Divider orientation='left' plain>
                Output
            </Divider>
            <TextArea rows={7} value={value} placeholder='Output' className='font-md my-1 text-cyan' />
        </>
    );
};

export default RoomOutput;
