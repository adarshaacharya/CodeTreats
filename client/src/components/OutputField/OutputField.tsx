import React from 'react';
import { stdout } from 'process';

type Props = {
    output: any;
};

const OutputField: React.FC<Props> = ({ output }) => {
    console.log(output);
    if (output?.stdout)
        return <textarea className='error' value={output.stdout} />;
    if (output?.stderr)
        return <textarea className='error' value={output.stderr} />;

    return <textarea></textarea>;
};

export default OutputField;

// {stdout: "hello world↵", stderr: "", error: ""}
// error: ""
// stderr: ""
// stdout: "hello world↵"
// __proto__: Object
