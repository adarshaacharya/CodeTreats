import { Spinner } from 'layout';
import React from 'react';
import CodeContext from '_context/code/code.context';
import './output-panel.style.css';

const OutputPanel: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output, loading } = codeContext;
    let value = '';
    // if (loading) return <textarea className='error output__area' value='running...' disabled />;

    if (loading) return <Spinner />;
    value = output?.stderr || output?.stdout || '';
    return (
        <>
            <textarea value={value} disabled className='output__area' placeholder='Output will display here...' />
        </>
    );
};

export default OutputPanel;
