import React from 'react';
import CodeContext from '_context/code/code.context';
import './output-panel.style.css';

const OutputPanel: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output, loading, language } = codeContext;

    if (loading)
        return <textarea className='error' value='running...' disabled />;

    const value = output?.stderr || output?.stdout || '';
    return (
        <>
            {language}
            <textarea value={value} disabled />
        </>
    );
};

export default OutputPanel;
