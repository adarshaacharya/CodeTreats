import { Input, Divider, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import RoomContext from '_context/room/room.context';

const text =
    "Only provide input if you ask user for input, else leave empty. Some browser based language like Javascript, Typescipt doesn't accept terminal inputs.";
const RoomInput = () => {
    const { updateRoomInput } = React.useContext(RoomContext);

    const handleInputChange = (event : React.FormEvent<HTMLTextAreaElement>) : void => {
        console.log(event.currentTarget.value)
    }
    const { TextArea } = Input;
    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Custom Input (stdin) &nbsp;
                <Tooltip title={text}>
                    <ExclamationCircleOutlined />
                </Tooltip>
            </Divider>
            <TextArea
                placeholder='Enter your input here..'
                onChange={handleInputChange}
                rows={3}
                className='font-md my-1'
            />
        </>
    );
};

export default RoomInput;
