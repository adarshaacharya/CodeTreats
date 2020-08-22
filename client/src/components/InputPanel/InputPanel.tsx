import { Input } from 'antd';
import React from 'react';
import CodeContext from '_context/code/code.context';

const InputPanel = () => {
    const codeContext = React.useContext(CodeContext);
    const { updateInput } = codeContext;

    const { TextArea } = Input;
    return (
        <>
            <TextArea
                placeholder='Enter your input here..'
                onChange={(e) => updateInput(e.target.value)}
                rows={5}
                className='font-md my-1'
            />
        </>
    );
};

export default InputPanel;
