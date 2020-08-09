import React from 'react';
import CodeContext from '_context/code/code.context';

import './output.style.css';

const OutputField: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output, loading } = codeContext;

    if (loading)
        return <textarea className='error' value='running...' disabled />;

    const value = output?.stderr || output?.stdout || '';
    return (
        <>
            <textarea value={value} disabled />
        </>
    );
};

export default OutputField;

// {stdout: "hello world↵", stderr: "", error: ""}
// error: ""
// stderr: ""
// stdout: "hello world↵"
// __proto__: Object
