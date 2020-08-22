import { Input } from 'antd';
import React from 'react';
import CodeContext from '_context/code/code.context';

const OutputPanel: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output, loading } = codeContext;
    let value = '';

    if (loading) return <Input.TextArea rows={7} value='running...' className='font-md' />;

    value = output?.stderr || output?.stdout || '';
    return (
        <>
            <Input.TextArea rows={7} value={value} placeholder='Output will display here...' className='font-md' />
        </>
    );
};

export default OutputPanel;
