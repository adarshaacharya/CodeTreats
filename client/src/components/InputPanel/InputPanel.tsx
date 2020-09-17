import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Input, Tooltip } from 'antd';
import React from 'react';
import { useCodeContext } from '_context/code/code.context';

const INPUT_TOOLTIP =
    "Only provide input if you ask user for input, else leave empty. Some browser based language like Javascript, Typescipt doesn't accept terminal inputs.";

    const InputPanel = () => {
    const  { updateInput } = useCodeContext();

    const { TextArea } = Input;
    return (
        <>
            <Divider orientation='left' plain>
                {' '}
                Custom Input (stdin) &nbsp;
                <Tooltip title={INPUT_TOOLTIP}>
                    <ExclamationCircleOutlined />
                </Tooltip>
            </Divider>
            <TextArea
                placeholder='Enter your input here..'
                onChange={(e) => updateInput(e.target.value)}
                rows={3}
                className='font-md my-1'
            />
        </>
    );
};

export default InputPanel;
