import React from 'react';
import CodeContext from '_context/code/code.context';
import './output-panel.style.css';

const OutputPanel: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output, loading, language } = codeContext;
    let value = '';
    if (loading)
        return <textarea className='error' value='running...' disabled />;

    value = output?.stderr || output?.stdout || '';
    return (
        <>
            <textarea value={value} disabled />
        </>
    );
};

export default OutputPanel;
