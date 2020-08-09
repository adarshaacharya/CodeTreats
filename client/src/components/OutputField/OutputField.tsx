import React from 'react';
import CodeContext from '_context/code/code.context';

import './output.style.css';

const OutputField: React.FC = () => {
    const codeContext = React.useContext(CodeContext);
    const { output } = codeContext;

    if (output?.stdout)
        return <textarea className='error' value={output.stdout} disabled />;
    if (output?.stderr)
        return <textarea className='error' value={output.stderr} disabled />;

    return (
        <>
            <textarea disabled />
        </>
    );
};

export default OutputField;

// {stdout: "hello world↵", stderr: "", error: ""}
// error: ""
// stderr: ""
// stdout: "hello world↵"
// __proto__: Object
