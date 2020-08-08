import React from 'react';

import './output.style.css';
type Props = {
    output: any;
};

const OutputField: React.FC<Props> = ({ output }) => {
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
