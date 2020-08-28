import { Input, Divider, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import CodeContext from '_context/code/code.context';

const text =
    "Only provide input if you ask user for input, else leave empty. Some browser based language like Javascript, Typescipt doesn't accept terminal inputs.";
const InputPanel = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateInput } = codeContext;

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
                onChange={(e) => updateInput(e.target.value)}
                rows={3}
                className='font-md my-1'
            />
        </>
    );
};

export default InputPanel;
