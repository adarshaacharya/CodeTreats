import { Divider, Input } from 'antd';
import React from 'react';
import { useCodeContext } from '_context/code/code.context';

const { TextArea } = Input;

const OutputPanel: React.FC = () => {
    const { output, loading } = useCodeContext();

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

    let value = output?.stderr || output?.stdout || '';
    return (
        <>
            <Divider orientation='left' plain>
                Output
            </Divider>
            <TextArea rows={7} value={value} placeholder='Output' className='font-md my-1 text-cyan' />
        </>
    );
};

export default OutputPanel;
